import Vue from 'vue'
import Vuex from 'vuex'
import {bookStore} from "@/store/bookStore"


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        book: bookStore
    }
})