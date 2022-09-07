import { createRouter, createWebHistory } from "vue-router";

import Index from './../components/Dashboard/Body/Pages/Table.vue';
import PostCreate from './../components/Dashboard/Body/Pages/Create.vue';


const routes = [
    {
        path: '/',
        name: 'post.Index',
        component: Index,
        meta: {
            title: 'Index'
        }
    },
    {
        path: '/post/create',
        name: 'post.Create',
        component: PostCreate,
        meta: {
            title: 'Post Create'
        }
    },
];


export default createRouter({
    history: createWebHistory(),
    routes,
});
