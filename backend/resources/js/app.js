import './bootstrap';
import '../css/app.css';

import { createApp } from "vue"
import App from "./App.vue"
import LaravelVuePagination from 'laravel-vue-pagination';

import router from './routes/routes';


createApp(App)
    .use(router)
    .component('Pagination', LaravelVuePagination)
    .mount('#app')

