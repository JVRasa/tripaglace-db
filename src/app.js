const express = require('express');
const db = require('./db-config');
var cors = require('cors');

const app = express();

const initRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());

initRoutes(app);

db.connect((err) => {
    if (err) console.error('error connecting to db');
});

module.exports.app = app;
