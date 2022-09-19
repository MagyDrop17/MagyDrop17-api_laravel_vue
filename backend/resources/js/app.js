import './bootstrap';
import '../css/app.css';

import { createApp } from "vue"
import App from "./App.vue"
import LaravelVuePagination from 'laravel-vue-pagination';

import router from './routes/routes';
import VueSweetalert2 from 'vue-sweetalert2';


createApp(App)
    .use(router)
    .use(VueSweetalert2)
    .component('Pagination', LaravelVuePagination)
    .mount('#app')

