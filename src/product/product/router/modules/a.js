
export default [
    {
        path: '/',
        name: 'index',
        redirect:'/gojs',
        component: () => import( /* webpackChunkName: "productproductView" */ "../../views/index.vue"),
        meta: {
            name_str: '首页'
        }
    },
    {
        path: '/view',
        name: 'view',
        component: () => import( /* webpackChunkName: "productproductView" */ "../../views/view.vue"),
        meta: {
            name_str: '首页'
        }
    }
];