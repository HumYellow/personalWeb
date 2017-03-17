<template>
	<div id="zero">
	  <p>{{ message }}</p>
	  <input v-model="message">
	</div>
</template>
<script>
export default {
    data () {
        return {
            message: 'Hello World!'
        }
    }
}
</script>
<style>
    html{
        background: #f1f1f1;
    }
</style>