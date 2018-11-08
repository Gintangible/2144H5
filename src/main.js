// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '../static/css/reset.css'; // 引入reset.css 文件

import axios from 'axios';
Vue.prototype.$axios = axios;

// 引入mockjs
require('./mock.js');

Vue.config.productionTip = false;

axios.interceptors.request.use(function (config) {
    store.dispatch('loading/onLoading', true);
    return config;
}, function (err) {
    return Promise.reject(err);
});

axios.interceptors.response.use(function (response) {
    store.dispatch('loading/onLoading', false);
    return response;
}, function (err) {
    return Promise.reject(err);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
