import Vue from "vue";
import Router from "vue-router";
// 路由懒加载 https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
const productList = () =>
    import( /* webpackChunkName: "productList" */ "./views/productList.vue");

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "productList",
            component: productList
        },
        {
            path: "/productList",
            name: "productList",
            component: productList
        }
    ]
});