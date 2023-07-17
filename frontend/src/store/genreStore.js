import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"


Vue.use(Vuex)

export const genreStore = {
    namespaced: true,
    store: () => ({
        genres: genreStore.getters.genres,
        genresOption: genreStore.getters.genresOption
        // token: localStorage.getItem('token') || ''

    }),
    getters: {
        genres: axios.get('api/genre').then((response) => {
            return response.data
        }),
        genresOption: axios.get('api/genre').then((response) => {
            let genresData = response.data
            const g = genresData.length
            let i = 0
            let option = []
            option.push({value: '', name: 'Выберите'})
            while (g > i) {
                option.push(
                    {value: genresData[i].id, name: genresData[i].name}
                )
                i++
            }
            return option
        })


    },
    mutations: {},
    actions: {},
    modules: {}
}