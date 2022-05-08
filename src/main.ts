import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
import 'uno.css';

createApp(App).use(router).use(createPinia()).mount('#app');
