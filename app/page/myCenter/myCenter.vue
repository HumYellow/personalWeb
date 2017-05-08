<style scoped>
    @import '../../common/scss/myCenter.scss'
</style>
<template id="myCenter">
    <div>
        <headerBox></headerBox>
        <banner></banner>
        <footMenu menuType="mine"></footMenu>
    </div>
</template>
<script>
export default {
    data () {
        return {
            components: {}
        },
        document.title = "我的"
    }
}
</script>