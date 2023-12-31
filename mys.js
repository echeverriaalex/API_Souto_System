const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Souto_System', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});