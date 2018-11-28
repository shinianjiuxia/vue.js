<template>
    <div>
       <div class="wrap">
            <div class="wrap_left">
               <img src="../assets/sort_1.png" alt="">
            </div>
            <h2>
               个人中心
            </h2>
              <i class="icon iconfont icon-duanxin"></i>
         </div>
         <div class="avatar">
             <div class="titer">
                <img src="../assets/my_1.png" alt="">
             </div>
             <h3>小也橘</h3>
             <div>
                 <span>LV.9</span>
                 <div class="progress_bar">
                    <div></div>
                 </div>
             </div>
             <p @click="login">账户管理
                 <img src="../assets/m.png" alt="">
             </p>
         </div>
         <div class="nav">
            <ul>
                <li>
                    <img src="../assets/my_2.png" alt="">
                   <p>待付款</p>
                </li>
                 <li>
                    <img src="../assets/my_3.png" alt="">
                   <p>待收货</p>
                </li>
                 <li>
                    <img src="../assets/my_4.png" alt="">
                   <p>待评价</p>
                </li>
                 <li>
                    <img src="../assets/my_5.png" alt="">
                   <p>退换/售后</p>
                </li>
            </ul>
         </div>
         <div class="content">
             <div @click="order()">我的订单
                 <img src="../assets/m.png" alt="">
             </div>
             <div>收货地址管理
                  <img src="../assets/m.png" alt="">
             </div>
             <div>购买记录
                  <img src="../assets/m.png" alt="">
             </div>
             <div>修改个人资料
                  <img src="../assets/m.png" alt="">
             </div>
             <div>我的评价
                  <img src="../assets/m.png" alt="">
             </div>
             <div>设置
                  <img src="../assets/m.png" alt="">
             </div>
         </div>
    </div>
</template>

<script>
    export default{
        name:'MyInfo',
        methods:{
            order(){
              this.$router.push('/myOrder')
            },
            login(){
               this.$router.push('/login') 
            }
            
        }
    }
</script>

<style lang="" scoped>
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

   .avatar{
       width:100%;
       height:11.48rem;
       background-color:#fff;
       border-bottom:0.04rem solid #d8d8d8;
       margin-top:3.72rem;
       position:relative;
   }

   .avatar h3{
       position:absolute;
       left:10.4rem;
       top:4.32rem;
       color:#303030;
       font-size:1.04rem;
   }

    .avatar span{
       position:absolute;
       left:10.4rem;
       top:6.24rem;
       color:#303030;
       font-size:1.04rem;
    }

    .avatar>p{
        color:#4d4c4c;
        font-size:0.96rem;
        font-weight:bold;
        position:absolute;
        right:2.0rem;
       top:4.24rem;
    }

     .avatar>p>img{
        color:#4d4c4c;
        padding-left:1rem;
        width:1rem;
        height:1rem;
     }

   .titer{
       width:8rem;
       height:8rem;
       margin-top:3.72rem;
       border-radius: 50%;
       position:absolute;
       left:1.2rem;
       top:-2.32rem;
      
   }

   .titer>img{
       width:100%;
       height:100%;
   }

   .progress_bar{
       width:3.2rem;
       height:0.24rem;
       border:0.04rem solid #44a11b;
       border-radius: 0.12rem;
       position:relative;
        left:12.88rem;
       top:6.8rem;
   }

    .progress_bar>div{
       width:1.28rem;
       height:0.24rem;
       background-color: #44a11b;
       border-radius: 0.12rem;
       position:absolute;
       top:0;
       left:0;
    }

    .nav{
        width:100%;
        height:6.76rem;
        background-color:#fff;
        border-bottom:0.04rem solid #d8d8d8;
          overflow: hidden;
    }
 
   .nav>ul{
      overflow: hidden;
   }

   .nav>ul>li{
       width:7.5rem;
       height:6.76rem;
       position:relative;
       list-style: none;
       float:left;
   }

    .nav>ul>li>img{
        position:absolute;
        top:1.36rem;
        left:2.68rem;
        width:2.64rem;
        height:2.64rem;
    }

     .nav>ul>li>p{
       position:absolute;
       top:3.48rem;
       left:2.2rem;
       color:#4d4c4c;
       font-size:0.96rem;
     }

     .content{
        width:100%;
        height:27.16rem; 
        background-color: #fff;
     }

    .content div{
        color:#363636;
        font-size:0.96rem;
        font-weight:bold;
        line-height:3rem;
        text-indent: 1.68rem;
        position:relative;
      }

      .content div img{
         width:1rem;
         height:1rem;
         position:absolute;
         right:1.48rem;
         top:1.04rem;
      
      }

</style>