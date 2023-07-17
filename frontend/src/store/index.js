import Vue from 'vue'
import Vuex from 'vuex'
import {bookStore} from "@/store/bookStore"
import {genreStore} from "@/store/genreStore";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        book: bookStore,
        genre: genreStore
    }
})