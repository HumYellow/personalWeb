<style>
@import '../../common/scss/shopList.scss'
</style>
<template id="shopList">
    <div>
      <headerBox></headerBox>
        <ul id="storeList" class="storeList" data-address="$!useraddress">
            <li>
                <a href="${basePath}shop/shopDetail.xhtml?shopid=$shop.shopid&isreset=Y&v=$VmUtils.version">
                    <div class="storeLogo ui_media">
                        <span class="ui_pic">
                        <img width="100%" height="auto" src="${picPath}$shop.shopimg" />
                            </span>
                        <div class="ui_text">
                            <h3>$!shop.shopname</h3>
                            <p class="distance">$!VmUtils.getDistance($!shop.distance)<i>km</i></p>
                            <div class="storeAge mt5">
                            <!-- <h4>Rating</h4> -->
                            <p class="markAge clear"><span class="ageNum left">店址 : $!shop.shopaddress</span></p>
                            </div>
                        </div>
                    </div>
                    <span class="cityTag">$!citymap.get($shop.citycode)</span>
                </a>
            </li>
        </ul>
        <div class="close">
            <div class="c-img"><img src="${picPath}wps/dummystatus/store/close.png"></div>
            <p class="k-p">我们已经打烊啦，明天见咯^-^</p>
        </div> 
        <router-link to="/">首页</router-link>
    </div>
</template>
<script>
import Vue from 'vue'
import headerBox from '../../components/header/header.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))

Vue.http.get("http://www.wheelyschina.com/wheelyscafe/shop/shoppingCart.xhtml").then(
    function (res) {
        // 处理成功的结果
        alert(res.body);
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