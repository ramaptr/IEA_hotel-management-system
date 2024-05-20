const axios = require('axios');

const accommodationsService = {
    getAccommodations: async () => {
        return axios.get('http://localhost:8001/accommodations')
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    // Implement other methods as needed
};

module.exports = accommodationsService;
