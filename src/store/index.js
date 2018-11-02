import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        namespaced: true,
        loading
    }
    // state: {
    //     isLoading: false
    // },
    // mutations: {
    //     updateLoadingState(state, flag) {
    //         state.isLoading = flag;
    //     }
    // },
    // actions: {
    //     onLoading(context, flag) {
    //         context.commit('updateLoadingState', flag);
    //     }
    // }
});

export default store;
