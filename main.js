const express = require('express')
const { sequelize } = require('./database/connection');
const { Router } = require('express')
const port = 3000


sequelize.authenticate()
    .then(() => {
        const app = express();
        const router = Router();

        app.listen(3000);

        exports = module.exports = app;

        console.log("Connection established!");
    })
    .catch((err) => {
        console.error("Error authenticating database: ", err);
    });