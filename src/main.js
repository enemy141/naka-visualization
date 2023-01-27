import { createApp } from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from '@/router/index';
var app = createApp(App)



app.use(router)
app.use(DatePicker);
app.mount('#app')
