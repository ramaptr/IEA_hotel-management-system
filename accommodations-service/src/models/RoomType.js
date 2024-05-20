const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const RoomType = sequelize.define('RoomType', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = RoomType;
