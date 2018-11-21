import Cookie from 'assets/js/cookie';
import {
    logout,
    getInfo
} from 'api/login';

const DATA_OK = 200;

const state = {
    token: Cookie.get('token'),
    name: '',
    avator: '',
    isVerified: false,
    isPhone: false
};

const mutations = {
    SET_NAME(state, name) {
        state.name = name;
    },
    SET_AVATAR(state, avatar) {
        state.avatar = avatar;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_ISVERIFIED(state, isVerified) {
        state.isVerified = isVerified;
    },
    SET_ISPHONE(state, isPhone) {
        state.isPhone = isPhone;
    },
    initState(state) {
        state.isPhone = false;
        state.name = '';
        state.avatar = '';
        state.isVerified = false;
    }
};
const actions = {
    getUserInfo({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then((res) => {
                var data = res.data;
                if (data.code === DATA_OK) {
                    Cookie.set('token', data.token);
                    commit('SET_NAME', data.name);
                    commit('SET_AVATAR', data.avatar);
                    commit('SET_TOKEN', data.token);
                    commit('SET_ISVERIFIED', data.isVerified);
                    commit('SET_ISPHONE', data.isPhone);
                    resolve(data);
                }
            }).catch(error => {
                reject(error);
            });
        });
    },
    // 登出
    logOut({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then((res) => {
                if (res.data.code === DATA_OK) {
                    Cookie.del('token');
                    console.log('login out');
                    commit('initState');
                }
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
