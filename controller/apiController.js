var express = require('express');
var api = express.Router();
const pool = require('../config/database')

api.get('/', async (req, res) => {
    res.render('index', { title: 'api' });
});

module.exports = api;