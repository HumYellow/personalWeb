<template>
	<footer class="footMenu">
		<div class="footMenuMod">
			<a href="${basePath}index.xhtml"><img width="25%" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/wps/icon/icon-index-c.png" /></a>
		</div>
		<div class="footMenuMod">
			<a href="${basePath}news/newsList.xhtml"><img width="25%" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/wps/icon/icon-index-c.png" /></a>
		</div>
		<div class="footMenuMod">
			<a href="${basePath}shop/getOrderList.xhtml"><img width="25%" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/wps/icon/icon-index-c.png" /></a>
		</div>
		<div class="footMenuMod">
			<a href="${basePath}home/index.xhtml"><img width="25%" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/wps/icon/icon-index-c.png" /></a>
		</div>
	</footer>
</template>
<script>
import R from '../../common/js/touch.js'
console.info(R.picPath)
</script>
<style lang="sass">
.footMenu{border-top:1px solid #dcdcdc; position:fixed; bottom:0; left:0; width:100%; padding:5px 0; background:#fff;}
.footMenu:after{content:'';clear:both;display:block;visibility: hidden;height:0px; width:0px;font-size:0px;}
.footMenu .footMenuMod{width:25%; float:left; text-align:center;}
</style>