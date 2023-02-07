import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import {createPinia} from "pinia";


// import './assets/css/reset.css';

createApp(App).use(router).use(createPinia).mount('#app')
