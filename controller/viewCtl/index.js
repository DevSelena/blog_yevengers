var express = require('express');
var router = express.Router();

// var axios = require('axios');

router.get('/', function(req, res) {
  res.render('index', { title: 'index2222222222' });
});

module.exports = router;