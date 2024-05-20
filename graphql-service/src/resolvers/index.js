const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const axios = require('axios');
const ReservationType = new GraphQLObjectType({
    name: 'Reservation',
    fields: () => ({
        id: { type: GraphQLString },
        guest_name: { type: GraphQLString },
        room_type: { type: GraphQLString },
        start_date: { type: GraphQLString },
        end_date: { type: GraphQLString },
        status: { type: GraphQLString }
    })
});

const reservations = {
    type: new GraphQLList(ReservationType),
    resolve(parent, args) {
        return axios.get('http://localhost:8000/reservations')
            .then(res => res.data);
    }
};

module.exports = { reservations };
