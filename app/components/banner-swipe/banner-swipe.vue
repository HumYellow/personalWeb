<template>
	<div id="app">
		<div class="swiper-container">
		<div class="swiper-wrapper">

		<div class="swiper-slide">
		  <img class="imgload" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/mchproduct/s4116aea6_15a3fc17aca__8000.jpg?v=2017032414T" alt="首页banner图片01">
		</div>
		<div class="swiper-slide">
		  <img class="imgload" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/mchproduct/s4116aea6_15a3fc17aca__8000.jpg?v=2017032414T" alt="首页banner图片02">
		</div>
		<div class="swiper-slide">
		  <img class="imgload" src="http://wheelysoss.oss-cn-shanghai.aliyuncs.com/img/mchproduct/s4116aea6_15a3fc17aca__8000.jpg?v=2017032414T" alt="首页banner图片02"></div>
		</div>
		<!-- 如果需要分页器 -->
		<!-- <div class="swiper-pagination"></div> -->

		<!-- 如果需要导航按钮 -->
		<!-- <div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div> -->
		</div>
	</div>
</template>
<style lang="sass">
@import '../../common/css/swiper-3.4.2.min.css'

</style>
<script>
import Vue from 'vue'
import Swiper from '../../common/js/swiper-3.4.2.min.js'

export default {
	components: {},
	mounted () {
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
	}
}
</script>