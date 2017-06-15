import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Index from './page/index/index.vue'
import ShopList from './page/shopList/shopList.vue'
import ShopDetail from './page/shopDetail/shopDetail.vue'
import Find from './page/find/find.vue'
import OrderList from './page/orderList/orderList.vue'
import OrderDetail from './page/orderDetail/orderDetail.vue'
import MyCenter from './page/myCenter/myCenter.vue'


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
        },{
            path: '/shopDetail/:id', 
            name:'shopDetail',
            component:ShopDetail
        },{
        	path: '/find', 
        	name:'find',
        	component:Find
        },{
        	path: '/orderList', 
        	name:'orderList',
        	component:OrderList
        },{
            path: '/orderDetail/:id', 
            name:'orderDetail',
            component:OrderDetail
        },{
        	path: '/myCenter', 
        	name:'myCenter',
        	component:MyCenter
        }
    ]
})
export default router