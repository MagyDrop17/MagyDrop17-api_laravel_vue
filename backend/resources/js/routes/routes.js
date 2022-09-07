import { createRouter, createWebHistory } from "vue-router";

import PostDashboard from './../components/Dashboard/Dashboard.vue';
import PostCreate from './../components/Dashboard/Create.vue';


const routes = [
    {
        path: '/',
        name: 'post.Index',
        component: PostDashboard,
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
