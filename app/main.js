import Vue from 'vue'
import VueResource from 'vue-resource'
import Index from './page/index/index.vue'
import router from './routers'
import config from './config'


Vue.config.debug = true;
const app = new Vue({
    router,
    render: h => h(Index)
}).$mount('#app')
