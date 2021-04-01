import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import axios from 'axios'

createApp(App).use(router).mount('#app')

Vue.use(Vuelidate);
Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");