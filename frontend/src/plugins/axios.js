import axios from "axios";

axios.defaults.baseURL = 'http://dragonfly774.pythonanywhere.com/'

export default {
    install(Vue) {
        Vue.prototype.$ajax = axios
    }
}