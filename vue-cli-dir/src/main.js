import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

import './assets/css/reset.css';

createApp(App).use(router).mount('#app')
