const state = {
    name: '',
    avator: '',
    isVerified: false,
    isPhone: false
};

const mutations = {
    updateLoadingState(state, data) {
        state.name = data.name;
        state.isVerified = data.isVerified;
        state.isPhone = data.isPhone;
        state.avator = data.avator;
    }
};
const actions = {
    loginData(context, data) {
        context.commit('updateLoadingState', data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
