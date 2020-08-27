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
const contentList = Mock.mock({
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

const randomBodyResList = Mock.mock({
    'list|76': [
        {
            'sex': '@sexRes',
            'age|35-55': 1,
            'resStatus': '@bodyRes'
        }
    ]
});
module.exports.contentList = contentList;
module.exports.randomBodyResList = randomBodyResList;
