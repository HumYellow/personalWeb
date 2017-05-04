<style>
@import '../../common/scss/myOrderList.scss'
</style>
<template>
    <div>
        <headerBox></headerBox>
        <orderList></orderList>
        <footMenu menuType="orderList"></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import headerBox from '../../components/header/header.vue'
import orderList from '../../components/orderList/orderList.vue'
import footMenu from '../../components/footMenu/footMenu.vue'
Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))
Vue.component('orderList',Vue.extend(orderList))
Vue.component('footMenu',Vue.extend(footMenu))
export default {
    components: {},
    data () {
        return {
            orderList:[]
        },
        document.title = "订单"
    }
}
</script>