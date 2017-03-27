import Vue from 'vue'
import Index from './page/index/index.vue'
import router from './routers'


Vue.config.debug = true;
const app = new Vue({
    router,
    render: h => h(Index)
}).$mount('#app')
