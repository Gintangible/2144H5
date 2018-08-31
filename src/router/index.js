import Vue from 'vue';
import Router from 'vue-router';
import selected from '@/components/selected/selected';
import game from '@/components/game/game';
import user from '@/components/user/user';

Vue.use(Router);

var routes = [{
        path: '/',
        name: 'selected',
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
    }
];
export default new Router({
    linkActiveClass: 'active',
    routes: routes
});
