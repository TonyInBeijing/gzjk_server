var express = require('express');
var router = express.Router();
const { contentList } = require('../mock/mock');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 首页内容详情
router.post('/contentList', (req, res, next) => {
  const contents = contentList;
  res.json({ code: 200, list: contents });
});
module.exports = router;
