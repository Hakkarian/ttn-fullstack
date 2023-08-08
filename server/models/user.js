const Sequelize = require('sequelize');

const db = require('../db');

module.exports = db.define({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primatyKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})