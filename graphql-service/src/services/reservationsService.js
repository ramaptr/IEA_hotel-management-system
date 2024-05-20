const axios = require('axios');

const reservationsService = {
    getReservations: async () => {
        return axios.get('http://localhost:8000/reservations')
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    // Implement other methods as needed
};

module.exports = reservationsService;
