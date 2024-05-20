const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const reservationQueries = require('../resolvers/reservations');
const accommodationQueries = require('../resolvers/accommodations');
const customerQueries = require('../resolvers/customers');
const paymentQueries = require('../resolvers/payments');
const staffOperationsQueries = require('../resolvers/staffOperations');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...reservationQueries,
        ...accommodationQueries,
        ...customerQueries,
        ...paymentQueries,
        ...staffOperationsQueries,
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
