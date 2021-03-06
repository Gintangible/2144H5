import Vue from 'vue';
import Router from 'vue-router';
import selected from '@/pages/selected/selected';
import game from '@/pages/game/game';
import user from '@/pages/user/user';
import verified from '@/pages/verified/verified';
import phone from '@/pages/phone/phone';
import repwd from '@/pages/repwd/repwd';
import service from '@/pages/service/service';
import login from '@/pages/login/login';

Vue.use(Router);

var routes = [{
        path: '/',
        component: selected
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/selected',
        name: 'selected',
        component: selected
    },
    {
        path: '/game',
        name: 'game',
        component: game
    },
    {
        path: '/user',
        name: 'user',
        component: user
    },
    {
        path: '/verified',
        component: verified,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/phone',
        component: phone,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/repwd',
        component: repwd,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/service',
        component: service
    }
];
export default new Router({
    linkActiveClass: 'active',
    routes: routes,
    mode: 'history'
});
