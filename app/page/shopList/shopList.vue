<style>
@import '../../common/scss/shopList.scss'
</style>
<template id="shopList">
    <div>
        <headerBox></headerBox>
        {{shopList}}
        <div class="close">
            <div class="c-img"><img src="${picPath}wps/dummystatus/store/close.png"></div>
            <p class="k-p">我们已经打烊啦，明天见咯^-^</p>
        </div> 
        <router-link to="/">首页</router-link>
        <footMenu></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import headerBox from '../../components/header/header.vue'
import VueResource from 'vue-resource'
import footMenu from '../../components/footMenu/footMenu.vue'
Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))
Vue.component('footMenu',Vue.extend(footMenu))


Vue.http.get("http://test.wheelyschina.com/wheelyscafe/ajax/shop/queryList.xhtml").then(
    function (res) {
        // 处理成功的结果
        const shopList = res.body;
        console.info(shopList.data);
    },function (res) {
    // 处理失败的结果
    }
);
export default {
    data () {
        return {
            message: 'This is list!'
        }
    }
}
</script>