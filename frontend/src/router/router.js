import VueRouter from "vue-router"
import BookPage from "@/pages/BookPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: BookPage,
        meta: {requestAuth: true}
    },
    {
        path: "/login",
        component: LoginPage,
        meta: {requestAuth: false}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.meta.requestAuth && !token){
        next('/login')
    } else {
        next()
    }
})
export default router;