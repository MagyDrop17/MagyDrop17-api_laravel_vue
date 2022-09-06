import './bootstrap';
import '../css/app.css';

import { createApp } from "vue"
import App from "./App.vue"
import LaravelVuePagination from 'laravel-vue-pagination';


createApp(App)
    .component('Pagination', LaravelVuePagination)
    .mount('#app')

