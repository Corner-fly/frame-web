
export default [
    {
        path: '/vueDraggableResizable1',
        name: 'vueDraggableResizable1',
        component:  () => import( /* webpackChunkName: "vueDraggableResizable1" */ "../../views/vueDraggableResizable1.vue"),
        meta: {
            name_str: 'vueDraggableResizable'
        }
    },
    {
        path: '/vueDraggableResizable2',
        name: 'vueDraggableResizable2',
        component:  () => import( /* webpackChunkName: "vueDraggableResizable2" */ "../../views/vueDraggableResizable2.vue"),
        meta: {
            name_str: 'vueDraggableResizable'
        }
    },
    {
        path: '/vueDraggableResizableRotatable',
        name: 'vueDraggableResizableRotatable',
        component:  () => import( /* webpackChunkName: "vueDraggableResizableRotatable" */ "../../views/vueDraggableResizableRotatable.vue"),
        meta: {
            name_str: 'vueDraggableResizable'
        }
    },
];