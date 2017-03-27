<style>
@import '../../common/scss/shopList.scss'
</style>
<template id="shopList">
    <div>
        <headerBox></headerBox>
        <banner></banner>
        <shopList></shopList>
        <router-link to="/">首页</router-link>
        <footMenu></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import headerBox from '../../components/header/header.vue'
import banner from '../../components/banner-swipe/banner-swipe.vue'
import shopList from '../../components/shopList/shopList.vue'
import footMenu from '../../components/footMenu/footMenu.vue'
Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))
Vue.component('banner',Vue.extend(banner))
Vue.component('shopList',Vue.extend(shopList))
Vue.component('footMenu',Vue.extend(footMenu))

</script>