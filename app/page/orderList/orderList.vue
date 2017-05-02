<style>
@import '../../common/scss/myOrderList.scss'
</style>
<template id="orderList">
    <div>
        <headerBox></headerBox>
        <article>
            <ul>
                <li>
                    <div class="orderBox">
                        <a href="${basePath}order/orderDetail.xhtml?tradeno=$orderVo.tradeno" >
                        <div class="orderBoxDetails ui_media">
                            <div class="ui_pic">
                                <img width="100%" src="${picPath}$orderVo.shop.shopimg" />
                            </div>
                            <div class="ui_text ui_media modDetails">
                                <div class="ui_pic">
                                    <p class="shopName">$orderVo.ordertitle</p>
                                    #set($detail=$orderVo.detailList.get(0))
                                    #if($orderVo.detailList.size() gt 1)
                                    <p class="clear"><span class="left">${detail.productname}等$orderVo.detailList.size()种</span><img class="left" style="display:inline-block; height:1rem; margin:8px 5px;" src="${picPath}wps/myCenter/ordTb-icn.png" /></p>
                                    #else
                                    <p>${detail.productname}</p>
                                    #end
                                </div>
                                <div class="ui_text">
                                    <p>$orderVo.getOrderStatus()</p>
                                    <p class="num">￥$!VmUtils.getAmount($orderVo.netpaid)</p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <div class="clear orderTime">
                            <span class="left">$DateUtil.format($orderVo.createtime,'yyyy-MM-dd HH:mm')</span>
                            #if($VmUtils.eq($orderVo.paystatus, 'paid') && !$VmUtils.eq($orderVo.status, 'refund_finish') && !$VmUtils.contains($orderVo.otherinfo, 'comment'))<a class="right ml10 goEvaluate" href="${basePath}home/writeOrderComment.xhtml?tradeno=$orderVo.tradeno">去评价</a>#end
                            <a class="right" href="${basePath}shop/shopDetail.xhtml?shopid=$orderVo.shopid">再来一单</a>
                        </div>
                    </div>
                </li>
            </ul>
        </article>
        <footMenu menuType="orderList"></footMenu>
    </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import headerBox from '../../components/header/header.vue'
import footMenu from '../../components/footMenu/footMenu.vue'
Vue.use(VueResource);
Vue.component('headerBox',Vue.extend(headerBox))
Vue.component('footMenu',Vue.extend(footMenu))
export default {
    components: {},
    data () {
        return {
          
        },
        document.title = "订单"
    }
}
</script>