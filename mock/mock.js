const Mock = require('mockjs');
const Random = Mock.Random;
Random.extend({
    isFavor: function () {
        const favorStatus = ['0', '1',];
        return this.pick(favorStatus);
    },
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

module.exports.contentList = contentList;
