// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const loginData = Random.boolean() ? {
    code: 200,
    uid: Random.natural(10),
    name: Random.cname(),
    avatar: Random.dataImage('54x54', '头像'),
    isPhone: Random.boolean(),
    isVerified: Random.boolean(),
    token: Random.word(11)
} : '';

const loginOutData = {
    code: 200
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(/\/user\/info\.*/, 'get', loginData);
Mock.mock('/login/logout', 'post', loginOutData);
