import './bootstrap';
import '../css/app.css';

import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue"
import LaravelVuePagination from 'laravel-vue-pagination';

import PostDashboard from './components/Dashboard/Dashboard.vue';
import PostCreate from './components/Dashboard/Create.vue';

const routes = [
    {path: '/', component: PostDashboard },
    {path: '/post/create', component: PostCreate },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App)
    .use(router)
    .component('Pagination', LaravelVuePagination)
    .mount('#app')

