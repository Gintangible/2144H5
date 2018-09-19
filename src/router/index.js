import Vue from 'vue';
import Router from 'vue-router';
import selected from '@/components/selected/selected';
import game from '@/components/game/game';
import user from '@/components/user/user';
import verified from '@/components/verified/verified';
import phone from '@/components/phone/phone';
import repwd from '@/components/repwd/repwd';
import service from '@/components/service/service';

Vue.use(Router);

var routes = [{
        path: '/',
        component: selected
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
        beforeEnter: (to, from, next) => {
            if ('登录') {
                next();
            }
        }
    },
    {
        path: '/phone',
        component: phone,
        beforeEnter: (to, from, next) => {
            if ('登录') {
                next();
            }
        }
    },
    {
        path: '/repwd',
        component: repwd,
        beforeEnter: (to, from, next) => {
            if ('登录') {
                next();
            }
        }
    },
    {
        path: '/service',
        component: service
    }
];
export default new Router({
    linkActiveClass: 'active',
    routes: routes
});
