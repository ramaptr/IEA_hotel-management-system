const axios = require('axios');

const staffOperationsService = {
    getStaffOperations: async () => {
        return axios.get('http://localhost:8004/staff-operations')
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    // Implement other methods as needed
};

module.exports = staffOperationsService;
