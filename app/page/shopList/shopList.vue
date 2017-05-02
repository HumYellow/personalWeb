<style>
@import '../../common/scss/shopList.scss'
</style>
<template id="shopList">
    <div>
        <mapHeader></mapHeader>
        <banner></banner>
        <shopList></shopList>
        <footMenu menuType="shopList"></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import mapHeader from '../../components/mapHeader/mapHeader.vue'
import banner from '../../components/banner-swipe/banner-swipe.vue'
import shopList from '../../components/shopList/shopList.vue'
import footMenu from '../../components/footMenu/footMenu.vue'
Vue.use(VueResource);
Vue.component('mapHeader',Vue.extend(mapHeader))
Vue.component('banner',Vue.extend(banner))
Vue.component('shopList',Vue.extend(shopList))
Vue.component('footMenu',Vue.extend(footMenu))


export default {
    components: {},
    data () {
        return {
          
        },
        document.title = "首页"
    },
    mounted () {
      /*this.$nextTick(function () {
        MP("akvalue").then( BMap => {
            var map = new BMap.Map("allmap");            // 创建Map实例
            var point = BMap.Point(this.longitude,this.latitude); // 创建点坐标
            map.centerAndZoom(point,15);
            map.enableScrollWheelZoom();
            console.info(point);
          })
      })*/
  }
}
</script>