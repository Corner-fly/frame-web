
export default [
    {
        path: '/echarts',
        name: 'echarts',
        component:  () => import( /* webpackChunkName: "echarts" */ "../../views/echarts.vue"),
        meta: {
            name_str: 'echarts'
        }
    }
];