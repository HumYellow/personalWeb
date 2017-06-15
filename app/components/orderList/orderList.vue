<template>
    <ul id="orderList">
        <li v-for="orderBox in orderList">
            <div class="orderBox">
                <router-link :to="'/orderDetail/'+orderBox.id">
                    <div class="orderBoxDetails ui_media">
                        <div class="ui_pic">
                            <img width="100%" :src="picPath+orderBox.shop.shopimg" />
                        </div>
                        <div class="ui_text ui_media modDetails">
                            <div class="ui_pic">
                                <p class="shopName">{{orderBox.ordertitle}}</p>
                                <p v-if="orderBox.detailList.length == '1'">{{orderBox.detailList[0].productname}}</p>
                                <p v-else class="clear">
                                    <span class="left">{{orderBox.detailList[0].productname}}等{{orderBox.detailList.length}}种</span>
                                    <img class="left" style="display:inline-block; height:1rem; margin:8px 5px;" :src="picPath+'wps/myCenter/ordTb-icn.png'" />
                                </p>
                             </div>
                            <div class="ui_text">
                                <p>{{orderBox.orderStatus}}</p>
                                <p class="num">￥{{orderBox.netpaid}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
                <div class="clear orderTime">
                    <span class="left">{{orderBox.createtime}}</span>
                    <a class="right ml10 goEvaluate" href="${basePath}home/writeOrderComment.xhtml?tradeno=$orderVo.tradeno">去评价</a>
                    <a class="right" href="${basePath}shop/shopDetail.xhtml?shopid=$orderVo.shopid">再来一单</a>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import Vue from 'vue'
export default {
    name:'orderList',
    data () {
        return {
            orderList:[],
            detailListSize:[],
            picPath:global.picPath
        }
    },
    mounted(){
        var _that = this
        Vue.http.get(global.basePath+"orderList.html").then(
            function (res) {
                // 处理成功的结果
                _that.orderList = res.body.retval;

               /* _that.shopList = res.body.data.shopList
                _that.map = res.body.data.citymap
                if(_that.shopList.length == 0){
                    _that.isNull=true
                }*/
            },function (res) {
            // 处理失败的结果
            }
        )
    }
}
</script>