<template>
    <div>
        <div class="wrap">
            <div class="wrap_left">
               <img src="../assets/sort_1.png" alt="">
            </div>
            <h2>
               我的订单
            </h2>
              <i class="icon iconfont icon-duanxin"></i>
         </div>
         <div class="nav">
             <ul>
                 <li>全部订单</li>
                 <li>代付款</li>
                 <li>待发货</li>
                 <li>代收货</li>
                 <li>待评价</li>
             </ul>
         </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                   <div class="title">
                      <div class="order_number">
                            订单号：
                          <span>{{item.number}}</span>
                      </div>
                     <div class="order_time">
                         下单时间:
                          <span>{{item.time}}</span>
                     </div>
                     <div class="fall">
                        已签收
                     </div>   
                  </div>

                 <div class="commidty">
                    <div class="commidty_left">
                       <img :src="item.src" alt="">
                    </div>
                    <div class="commidty_right">
                       <ul>
                           <li>{{item. message_one}}</li>
                           <li>{{item. message_two}}</li>
                           <li>{{item.message_sceend}} </li>
                           <li>{{item.message_fouer}}
                               <span>{{item.message_fouer_span}}</span>
                           </li>
                           <li>
                             <div>{{item.message_list}}</div>
                             <p>{{item.message_list_p}}</p>
                             <span>{{item.message_list_span}}</span>
                          </li>
                      </ul>
                    </div>
                </div>
                </li>
            </ul>
            <div class="sloat"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MyOrder",
        data(){
            return{
              arr:[{
            number:"485220171212452",
            time:"2017-12-12",
            fall:"已签收",
            src:"./static/myOrder_1.png",
            message_one:"卷筒制版牛皮纸大张打版纸 整卷服装打样",
            message_two:"纸 定制长度包装纸",
            message_sceend:"一面光滑 一面粗糙",
            message_fouer:"￥58.0",
            message_fouer_span:"订单详情>>",
            message_list:"包邮",
            message_list_p:"月销量4785笔",
            message_list_span:"去评价>>"
        },{
            number:"485220171213452",
            time:"2017-12-13",
            fall:"已下单",
            src:"./static/myOrder_2.png",
            message_one:"全开大张复古牛皮纸 食品中药品包装纸服",
            message_two:"装打版包书皮包装纸",
            message_sceend:"一面光滑 一面粗糙",
            message_fouer:"￥28.8",
            message_fouer_span:"订单详情>>",
            message_list:"包邮",
            message_list_p:"月销量4785笔",
            message_list_span:"去付款>>"
        },{
            number:"485220171215452",
            time:"2017-12-15",
            fall:"已发货",
            src:"./static/myOrder_3.png",
            message_one:"250克g荷兰白卡纸A4A3+/A2/A5牛皮卡纸",
            message_two:"厚硬手工黑色白色卡纸",
            message_sceend:"一面光滑 一面粗糙",
            message_fouer:"￥28.8",
            message_fouer_span:"订单详情>>",
            message_list:"包邮",
            message_list_p:"月销量4785笔",
            message_list_span:"去收货>>"
        },{
            number:"485220171216452",
            time:"2017-12-16",
            fall:"已收货",
            src:"./static/myOrder_4.png",
            message_one:"A3+A4A5牛皮纸账本凭证封面纸牛皮包装",
            message_two:"纸打印纸厚硬牛卡纸",
            message_sceend:"一面光滑 一面粗糙",
            message_fouer:"￥38.8",
            message_fouer_span:"订单详情>>",
            message_list:"包邮",
            message_list_p:"月销量4785笔",
            message_list_span:"去评价>>"
        },{
            number:"485220171216452",
            time:"2017-12-16",
            fall:"已收货",
            src:"./static/myOrder_5.png",
            message_one:"牛皮纸大张 120g 牛皮包装纸 正度竹浆包",
            message_two:"书纸 包装牛皮纸",
            message_sceend:"一面光滑 一面粗糙",
            message_fouer:"￥18.8",
            message_fouer_span:"订单详情>>",
            message_list:"包邮",
            message_list_p:"月销量4785笔",
            message_list_span:"去评价>>"
        }]
            }
        }
        
    }
</script>

<style lang="" scoped>
    body{
       background-color: #fff; 
    }
      .wrap{
       width:100%;
       height:3.72rem;
       background-color: #44a11b;
       position: fixed;
       top:0;
       left:0;
       z-index: 999;
   } 

    .wrap_left{
       width:1rem;
       height:2rem;
       margin-left: 1rem;
       margin-top:0.76rem;
    }
   
   .wrap h2{
       font-size:1.36rem;
       color:#fff;
       padding-right:1.2rem;
       position:absolute;
       left:11.12rem;
       top:0.9rem;
   }

   .icon-duanxin{
       font-size:1.6rem;
       position:absolute;
       right:1.36rem;
       top:0.9rem;
       color:#fff;
   }

   .nav{
       width:100%;
       height:3rem;
       margin-top:3.72rem;
       overflow: hidden;
   }

    .nav>ul>li{
        list-style: none;
        width:6rem;
        line-height: 3rem;
        text-align: center;
        float:left;
        color:#535353;
        font-size:0.96rem;
    }

     .nav>ul>li:hover{
        color:#a70707;
        font-size:0.96rem;
     }

    .title{
        width:100%;
        height:2.04rem;
        background-color: #f1f1f1;
        border-bottom:0.04rem solid #acacac;  
        position:relative; 
    }

    .order_number{
        color:#6e6e6e;
        font-size:0.88rem;
        text-indent: 0.88rem;
        position:absolute;
        bottom:0.4rem;
    }

   .order_time{
       color:#6f6f6f;
        font-size:0.88rem;
         position:absolute;
        bottom:0.4rem;
        left:14.8rem;
   }

   .fall{
      color:#6f6f6f;
      font-size:0.88rem;
      position:absolute;
      bottom:0.4rem;
      right:1.32rem;
      font-weight: bold;
   }

   .commidty{
       width:100%;
       height:9.72rem;
        background-color: #f1f1f1;
        position:relative;
   }

   .commidty_left{
      width:8.56rem;
      height:8.56rem;
      border:1px solid #000;
      position:absolute;
      left:0.84rem;
      top:0.64rem;
   }

   .commidty_right>ul{
       margin-left:10.2rem;
       list-style: none;
       color:#434242;
       font-size:1.04rem;
       white-space:nowrap;
       overflow:hidden;
        text-overflow:ellipsis;
   }

    .commidty_right>ul>li:first-child{
        margin-top:0.64rem;
        line-height: 1.44rem;
    }

     .commidty_right>ul>li:first-child+li+li{
         font-size:0.88rem;
         color:#c10101;
         line-height: 1.4rem;
     }
  
   .commidty_right>ul>li:first-child+li+li+li{
       color:#cb0000;
       font-size:1.28rem;
       line-height: 1.4rem;
   }

    .commidty_right>ul>li:first-child+li+li+li>span{
       color:#737373;
       font-size:0.96rem;
       margin-left:9.16rem;
    }

  .commidty_right>ul>li:first-child+li+li+li+li>div{
      font-style:normal;
      width:3.36rem;
      line-height:1.68rem;
      background-color: #a70707;
      text-align: center;
      color:#fff;
      display:inline-block;

      
  }

  .commidty_right>ul>li:first-child+li+li+li+li>p{
      display:inline-block;
      color:#887979;
      font-size:0.88rem;
      margin-left:0.64rem;
  }

  .commidty_right>ul>li:first-child+li+li+li+li>span{
      color:#a70707;
      font-size:0.96rem;
      margin-left:3.2rem;
  }

  .content>ul>li{
      margin-top:0.64rem;
  }

</style>