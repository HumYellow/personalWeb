<style>
@import '../../common/scss/shopList.scss'
</style>
<template id="shopList">
    <div>
        <headerBox></headerBox>
       
        <shopList></shopList>
        <router-link to="/">首页</router-link>
        <footMenu></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import headerBox from '../../components/header/header.vue'
import VueResource from 'vue-resource'
import footMenu from '../../components/footMenu/footMenu.vue'
import shopList from '../../components/shopList/shopList.vue'
Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))
Vue.component('footMenu',Vue.extend(footMenu))
Vue.component('shopList',Vue.extend(shopList))

</script>