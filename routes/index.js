var express = require('express');
var router = express.Router();
const mock = require('mock');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contentList', (req, res, next) => {
  const contentList = mock.mock({
    'contentList|1-10':[
      {
        'contentId|+1':1,
        'contentTitle|3-5': /[a-z][A-Z]/,
      }
    ]
  });
});
module.exports = router;
