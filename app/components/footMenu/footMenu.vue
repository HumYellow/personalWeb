<template>
	<footer class="footMenu">
		<div class="footMenuMod">
			<a v-if="menuType=='shopList'"><img width="25%" :src="picPath+'wps/icon/icon-index-c.png'" /></a>
			<router-link to="/" v-else><img width="25%" :src="picPath+'wps/icon/icon-index.png'" /></router-link>
		</div>
		<div class="footMenuMod">
			<a v-if="menuType=='find'"><img width="25%" :src="picPath+'wps/icon/icon-find-c.png'" /></a>
			<router-link to="/find" v-else><img width="25%" :src="picPath+'wps/icon/icon-find.png'" /></router-link>
		</div>
		<div class="footMenuMod">
			<a v-if="menuType=='orderList'"><img width="25%" :src="picPath+'wps/icon/icon-order-c.png'" /></a>
			<router-link to="/orderList" v-else><img width="25%" :src="picPath+'wps/icon/icon-order.png'" /></router-link>
		</div>
		<div class="footMenuMod">
			<a v-if="menuType=='mine'"><img width="25%" :src="picPath+'wps/icon/icon-mine-c.png'" /></a>
			<router-link to="/myCenter" v-else><img width="25%" :src="picPath+'wps/icon/icon-mine.png'" /></router-link>
		</div>
	</footer>
</template>
<script>
import R from '../../common/js/touch.js'
export default {
	data(){
		return{
			picPath:R.picPath
		}
	},
    props:['menuType']
}
</script>
<style lang="sass">
.footMenu{border-top:1px solid #dcdcdc; position:fixed; bottom:0; left:0; width:100%; padding:5px 0; background:#fff;}
.footMenu:after{content:'';clear:both;display:block;visibility: hidden;height:0px; width:0px;font-size:0px;}
.footMenu .footMenuMod{width:25%; float:left; text-align:center;}
.footMenu .footMenuMod a{display:block;}
</style>