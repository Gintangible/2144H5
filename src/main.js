// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '../static/css/reset.css'; // 引入reset.css 文件

import axios from 'axios';
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
    store.dispatch('onLoading', true);
    next();
});

router.afterEach((to, from) => {
    store.dispatch('onLoading', false);
});

Vue.config.productionTip = false;

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
