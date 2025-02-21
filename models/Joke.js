const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Joke = sequelize.define('Joke', {
    id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true
    },
    question: {
        type : DataTypes.STRING,
        allowNull: false
    },
    response: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Jokes',
    timestamps: true

});

module.exports = Joke;