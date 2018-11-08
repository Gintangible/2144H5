// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const loginData = Random.boolean() || true
    ? {
          code: 200,
          uid: Random.natural(10),
          name: Random.cname(),
          avatar: Random.dataImage('54x54', '头像'),
          isPhone: Random.boolean(),
          isVerified: Random.boolean()
      }
    : '';

const loginOutData = {
    loginOut: true
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/login', 'get', loginData);
Mock.mock('/loginOut', 'post', loginOutData);
