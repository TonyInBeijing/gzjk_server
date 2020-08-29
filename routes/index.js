var express = require('express');
var router = express.Router();
const Mock = require('mockjs');
const Random = Mock.Random;
Random.extend({
  isFavor: function () {
    const favorStatus = ['0', '1',];
    return this.pick(favorStatus);
  },
  sexRes: function () {
    const sexStatus = [1, 2];
    return this.pick(sexStatus);
  },
  bodyRes: function () {
    const resStatus = [0, 1];
    return this.pick(resStatus);
  }
});
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 首页内容详情
router.post('/contentList', (req, res, next) => {
  const contents = Mock.mock({
    'contentlist|10': [
      {
        'contentId|+1': 1,
        'contentTitle': Random.csentence(20),
        'contentPoster': Random.image('200x400'),
        'contentAvatar': Random.image('48x48'),
        'contentAuthor': '胖仔',
        'contentFavorNum|1-100000': 200,
        'isFavor': '@isFavor',
      }
    ],
  });
  res.json({ code: 200, list: contents });
});


// 生成更年期测试数据
router.get('/testdata', (req, res, next) => {
  const bodyResList = Mock.mock({
    'list|84': [
      {
        'sex': '@sexRes',
        'age|35-55': 1,
        'resStatus': '@bodyRes'
      }
    ]
  }).list;
  let resList = [1, '测试用户'];
  let sexFlage = 0; ageFlage = 0;
  for (let i in bodyResList) {
    const innerItem = bodyResList[i];
    if (sexFlage === 0) {
      resList.push(innerItem.sex);
      sexFlage = 1;
    }
    if (ageFlage === 0) {
      resList.push(innerItem.age);
      ageFlage = 1;
    }
    resList.push(innerItem.resStatus);
  }
  res.json({ code: 200, list: resList });
});
module.exports = router;
