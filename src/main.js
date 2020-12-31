import { createApp } from 'vue';
import { Button } from 'vant';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';
import './index.css';

// createApp(App).use(router).mount('#app');
const app = createApp(App);
app.use(Button);
app.use(router);
app.mount('#app');