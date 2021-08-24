
export default [
    {
        path: '/gojs',
        name: 'gojs',
        component:  () => import( /* webpackChunkName: "gojs" */ "../../views/gojs.vue"),
        meta: {
            name_str: 'gojs'
        }
    },
];