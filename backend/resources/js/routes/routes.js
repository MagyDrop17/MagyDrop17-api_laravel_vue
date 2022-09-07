import { createRouter, createWebHistory } from "vue-router";

import PostDashboard from './../components/Dashboard/Dashboard.vue';
import PostCreate from './../components/Dashboard/Create.vue';


const routes = [
    {
        path: '/',
        name: 'post.Index',
        component: PostDashboard
    },
    {
        path: '/post/create',
        name: 'post.Create',
        component: PostCreate
    },
];


export default createRouter({
    history: createWebHistory(),
    routes,
});
