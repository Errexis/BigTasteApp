const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');


dotenv.config();

const sequelize = new Sequelize(String(process.env.DB_NAME), String(process.env.DB_USER), String(process.env.DB_PASSWORD), {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

const db = {
    sequelize: sequelize
};

sequelize.sync({ alter: true }).then(() => {
    console.log("All tables have been synchronized.");
});

module.exports = { sequelize, db };