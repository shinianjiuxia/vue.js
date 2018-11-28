<template>
<div>
    <div class="wrap">
        <div class="wrap_left">
            <img src="../assets/sort_1.png" alt="">
        </div>
         <h2>
            确认订单
         </h2>
            <i class="icon iconfont icon-duanxin"></i>
    </div>
    
    <div class="header">
        <div class="title">
            <h3>收货人:</h3>
            <span>安洁莉娜</span>
            <i>18376755621</i>
        </div>
        <div class="address">
            <p>收货地址：
                <span>广西省南宁市西乡塘区上饶街道213号猜猜小区1栋 
                     <img src="../assets/m.png" alt=""> 
                </span>
            </p>
            <i>(收货不便时，可选择免费待收货服务）</i>
        </div>
    </div>
    <div class="content">
         <div class="pro">
             <img src="../assets/confirm_order_1.png" alt="">
             <ul>
                 <li>牛皮纸大张 120g 牛皮包装纸 正度竹浆包</li>
                 <li>书纸 包装牛皮纸</li>
                 <li>一面光滑 一面粗糙</li>
                 <li>
                     <span>￥28.8</span>
                     <div>包邮</div>
                     月销量4785笔
                 </li>
             </ul>
         </div>

         <div class="num">
              <ul>
                  <li>产品数量
                      <span>1</span>
                  </li>
                  <li>配送方式
                      <span>顺丰快递</span>
                  </li>
                   <li>快递运费
                      <span>￥：
                          <strong>0.00</strong>
                      </span>
                  </li>
                  <li>价格合计
                      <span>￥：
                          <strong>28.8</strong>
                      </span>
                  </li>
              </ul>
         </div>

         <div class="file"> 
             <div>合计：
                <span>￥28.8</span> 
             </div>
             <input type="button" value="提交订单" @click="pay">
         </div>
    </div>
</div>
</template>

<script>
    export default{
        name:"Confirm_order",
        methods:{
            pay(){
                this.$router.push('/pay')
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
       height:3.52rem;
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

   .header{
       width:100%;
       height:8.36rem;
       border:0.08rem solid #e0e0e0;
       margin-top:3.52rem;
   }

   .title>h3{
      line-height: 2.16rem;
      display: inline-block;
      font-size:1.04rem;
      color:#4d4d4d;
      margin-top:1.72rem;
      margin-left:1.52rem;
   }

    .title>span{
      line-height: 2.16rem;
      font-size:1.04rem;
      color:#4d4d4d;
     margin-left:0.8rem;
    }

     .title>i{
      font-style: normal;
      line-height: 2.16rem;
      font-size:1.04rem;
      color:#4d4d4d;
      margin-left:2.12rem;
     }
    
   .address{
       color:#545353;
       font-size:0.96rem;
       text-indent: 0.84rem;
   }

   .address img{
       width:0.72rem;
       height:1.08rem;
       margin-left:0.8rem;
   }

   .address i{
       font-style: normal;
        margin-left: 0.84rem;
       color:#434242;
       font-size:0.8rem;
   }

   .pro{
       width:100%;
       height:10rem;
       background-color: #f1f1f1;
       margin-top:2.2rem;
       position:relative;
   }

   .pro img{
      width:8.6rem;
      height:8.6rem;
      margin:0.84rem  0.84rem;
   }

   .pro ul{
        display:inline-block;
        list-style: none;
        color:#434242;
        font-size:1.04rem;
        width:19.74rem;
        height:10rem;
        position:absolute;
        top:0;
        right:0;
   }

   .pro ul>li:first-child{
       position:absolute;
       top:0.84rem;

   }

   .pro ul>li:first-child+li{
       position:absolute;
       top:2.6rem;
   }

    .pro ul>li:first-child+li+li{
      position:absolute;
       top:4.28rem; 
       color:#c10101;
       font-size:0.88rem; 
    }

    .pro ul>li:first-child+li+li+li{
        position:absolute;
       top:5.8rem; 
       color:#887979;
       font-size:0.88rem; 
    }

    .pro ul>li:first-child+li+li+li>span{
        color:#c10101;
       font-size:1.28rem; 
       display: block;
    }
    
     .pro ul>li:first-child+li+li+li>div{
        width:3.2rem;
        line-height:1.68rem;
        color:#fff;
       font-size:1.04rem; 
       background-color: #c10101;
       text-align: center;
       margin-left:0.5rem;
       display:inline-block;
     }
    
    .num{
        width:100%;
        height:12.56rem;
        background-color: #f1f1f1;
        margin-top:2.4rem;
    }

    .num>ul>li{
        line-height:3.14rem; 
        color:#434242;
        font-size:1.04rem;
        text-indent: 0.88rem;
    }

     .num>ul>li>span{
         margin-left:18rem;
     }

     .file{
         color:#474747;
         font-size:1.04rem;
     }

      .file>div{
          display: inline-block;
          margin-left:0.4rem;
      }
  
     .file span{
         color:#c20000;
         font-size:1.44rem;
         
     }

      .file input{
          width:10.56rem;
          height:2.72rem;
          background-color: #c10101;
          font-size:1.44rem;
          color:#ffffff;
          margin-left:10.4rem;

      }
      .file{
          position:absolute;
          bottom:4rem;
          left:0;
      }
</style>