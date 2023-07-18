import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"


axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Token ${token}`
    }
    return config
})


Vue.use(Vuex)

export const genreStore = {
    namespaced: true,
    store: () => ({
        genres: {}

    }),
    getters: {},
    mutations: {
        setGenres(state, genre) {
            state.genres = genre
        },
    },
    actions: {},
    modules: {}
}