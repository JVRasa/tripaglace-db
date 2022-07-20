const express = require('express');
const db = require('./db-config');

const app = express();

const initRoutes = require('./routes/index');

app.use(express.json());

initRoutes(app);
app.use(express.json());

db.connect((err) => {
    if (err) console.error('error connecting to db');
});

module.exports.app = app;
