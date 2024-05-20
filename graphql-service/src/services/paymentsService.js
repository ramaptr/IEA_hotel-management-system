const axios = require('axios');

const paymentsService = {
    getPayments: async () => {
        return axios.get('http://localhost:8003/payments')
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    // Implement other methods as needed
};

module.exports = paymentsService;
