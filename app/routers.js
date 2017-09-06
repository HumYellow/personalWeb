import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './page/App/app.vue'
import Index from './page/index/index.vue'
import MyToys from './page/myToys/myToys.vue'


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
   /* mode: 'history',*/
    base: __dirname,
    routes: [
        {path: '/', name:'index',component:Index},
     	{path: '/myToys', name:'myToys',component:MyToys},
    ]
})
export default router