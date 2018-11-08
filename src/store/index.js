import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import login from './modules/login';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        loading,
        login
    }
});

export default store;
