let express = require('express');
let router = express.Router();
let axios = require('axios');


router.get('/', function(req, res) {
  res.render('index', { title: 'YEVENGERS' });
});

router.get('/listview', function(req, res) {
  const searchData = req.query.search
  searchData ?
    axios.get('http://localhost:8001/api/board/search',{params: {'search':searchData}})
    .then(response => {
      const datacheck = response.data.data.board
      const data = (datacheck.length ? datacheck : false)
      res.render('listView', { title: 'YEVENGERS-list', data: data });
    })
    .catch(() => {
      const data = false
      res.render('listView', { title: 'YEVENGERS-list', data: data });
    })
  : axios.get('http://localhost:8001/api/board/find')
    .then(response => {
      res.render('listView', { title: 'YEVENGERS-list', data: response.data.data.data });
    });
});

router.get('/write', function(req, res){
  const boader_id = req.query.board_id;
  boader_id ? 
    axios.get('http://localhost:8001/api/board/find?board_id='+boader_id)
    .then(response => {
      console.log(response.data.data.data)
      res.render('write', { title: 'YEVENGERS-write', data : response.data.data.data})
    })
  : res.render('write', { title: 'YEVENGERS-write', data : false})
})

router.get('/view', function(req, res){
  const boader_id = req.query.board_id;
  axios.get('http://localhost:8001/api/board/find?board_id='+boader_id)
  .then(response => {
    console.log(response.data.data.data)
    res.render('view', { title: 'YEVENGERS-view', data : response.data.data.data})
  })
})

router.get('/test', function(req, res){
  res.render('test', { title: 'api test list' })
})



module.exports = router;