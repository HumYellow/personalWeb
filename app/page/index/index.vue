<template>
	<div>
		<bannerHead></bannerHead>
	</div>
</template>
<style lang="sass">
@import '../../common/css/swiper-3.4.2.min.css'

</style>
<script>
import Vue from 'vue'
import bannerHead from '../../components/bannerHead/bannerHead.vue'


Vue.component('bannerHead',Vue.extend(bannerHead))
export default {
	components: {},
	mounted () {
		
	}
}
</script>