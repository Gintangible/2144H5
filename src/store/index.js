import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';

Vue.use(Vuex);

const store = new Vuex.Store({
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
    // },
    modules: {
        loading
    }
});

export default store;
