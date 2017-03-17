import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Index from './page/index/index.vue'
import ShopList from './page/shopList/shopList.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
   /* mode: 'history',*/
    base: __dirname,
    routes: [
     	{
        	path: '/', 
        	name:'shopList',
        	component:ShopList
        }
    ]
})
export default router