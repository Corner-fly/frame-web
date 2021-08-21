
export default [
    {
        path: '/test',
        name: 'test',
        component:  () => import( /* webpackChunkName: "productproductView" */ "../../views/test.vue"),
        meta: {
            name_str: '测试页面'
        }
    }
];