<style>
@import '../../common/scss/shopList.scss'
</style>
<template id="shopList">
    <div>
        <headerBox></headerBox>
        <footMenu menuType="orderList"></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import headerBox from '../../components/header/header.vue'
import footMenu from '../../components/footMenu/footMenu.vue'
Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))
Vue.component('footMenu',Vue.extend(footMenu))
export default {
    components: {},
    data () {
        return {
          
        },
        document.title = "订单"
    }
}
</script>