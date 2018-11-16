import axios from 'axios';

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    console.log('request: ' + error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => response,
    error => {
        console.log('response: ' + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
