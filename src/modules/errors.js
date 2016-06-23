import Vue from 'vue';

const state = {
    errors: {},
};

const mutations = {

    ADD_ERROR(state, collection, error) {
        Vue.set(state.errors, collection, error);
    },

    CLEAR_ERRORS(state, collection) {
        Vue.delete(state.errors, collection);
    },

};

export default { state, mutations };