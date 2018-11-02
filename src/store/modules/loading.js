const state = {
    isLoading: false
};

const mutations = {
    updateLoadingState(state, flag) {
        state.isLoading = flag;
    }
};
const actions = {
    onLoading(context, flag) {
        context.commit('updateLoadingState', flag);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
