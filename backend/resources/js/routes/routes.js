import { createRouter, createWebHistory } from "vue-router";

import Index from './../components/Dashboard/Body/Pages/Table.vue';
import PostCreate from './../components/Dashboard/Body/Pages/Create.vue';
import PostEdit from './../components/Dashboard/Body/Pages/Edit.vue';


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
    {
        path: '/post/edit/:id',
        name: 'post.edit',
        component: PostEdit,
        meta: {
            title: 'Post Edit'
        }
    },
];


export default createRouter({
    history: createWebHistory(),
    routes,
});
