const axios = require('axios');

const customersService = {
    getCustomers: async () => {
        return axios.get('http://localhost:8002/customers')
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    // Implement other methods as needed
};

module.exports = customersService;
