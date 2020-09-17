var express = require('express');
var router = express.Router();

// var axios = require('axios');

router.get('/', function(req, res) {
  res.render('index', { title: 'YEVENGERS' });
});

module.exports = router;