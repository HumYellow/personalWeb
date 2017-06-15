<style>
@import '../../common/scss/find.scss'
</style>
<template id="shopList">
    <div>
        <headerBox></headerBox>
        <banner></banner>
        <div class="newsList">
            <div class="newsListMod" onclick="javascript:window.location.href='${basePath}news/newsDetail.xhtml?id=$news.id'">
                <p class="time">$!DateUtil.format($news.publishtime,'yyyy年MM月dd日HH:mm')</p>
                <h2>$!news.title</h2>
                <img width="100%" src="${picPath}$!news.newspicture" />
                <p class="newsText">$!news.overview</p>
                <p class="originalText">阅读原文</p>
            </div>
        </div>
        <footMenu menuType="find"></footMenu>
    </div>
</template>
<script>
export default {
    data () {
        return {
            components: {}
        },
        document.title = "发现"
    }
}
</script>