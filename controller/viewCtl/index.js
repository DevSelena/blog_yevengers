var express = require('express');
var router = express.Router();

// var axios = require('axios');

router.get('/', function(req, res) {
  res.render('index', { title: 'YEVENGERS' });
});

router.get('/listview', function(req, res) {
  res.render('listView', { title: 'YEVENGERS-list' });
});

router.get('/write', function(req, res){
  res.render('write', { title: 'YEVENGERS-write' })
})

router.get('/view', function(req, res){
  res.render('view', { title: 'YEVENGERS-view' })
})


module.exports = router;