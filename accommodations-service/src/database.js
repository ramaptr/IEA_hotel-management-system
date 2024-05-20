const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hotel', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
