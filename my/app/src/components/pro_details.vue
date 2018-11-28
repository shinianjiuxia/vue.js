<template>
 <div>
    <div class="wrap">
       <div class="wrap_left">
          <img src="../assets/sort_1.png" alt="">
      </div>
      <h2>
        产品详情
      </h2>
       <i class="icon iconfont icon-duanxin"></i>
    </div>
    <div class="content">
         <div class="banner">
            <swiper :options="swiperOption">
               <swiper-slide><img src="../assets/pro_details_1.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/pro_details_1.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/pro_details_1.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/pro_details_1.png" alt=""/></swiper-slide>
               <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
         </div>
         <div class="detailed">
              <h4>青山牛皮纸（3000/T）</h4>
              <ul>
                  <li>￥50.8</li>
                  <li>
                      <div class="nums">
                          <div class="nums_jian">-</div>
                          <input type="text" value="1">
                          <div class="nums_jia">+</div>
                      </div>
                      <p>库存：
                          <span>1250</span>
                      </p>
                  </li>
                  <li></li>
              </ul>
         </div>
    </div>
</div>   
</template>

<script>
import Vue from 'vue';
import Swiper from 'vue-awesome-swiper';
Vue.use(Swiper);
import 'swiper/dist/css/swiper.css';
 export default{
    name:"Pro_details",
    data(){
        return{
             swiperOption:{
                direction:'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                loop:true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                effect : 'coverflow',
            },
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

   .content{
       margin-top:3.72rem;
       background-color:#fff;
   } 

   .banner{
      width:100%;
      height:21.8rem;
      overflow: hidden; 
   } 

   .detailed h4{
      font-size:1.2rem;
      color:#403f3f;
      line-height: 3.48rem;
      text-align: center;
   }

   .detailed ul{
       border-bottom:0.04rem solid #e0e0e0;
   }

    .detailed ul li{
        text-indent: 0.8rem;
        width:100%;
        height:1.8rem;
    }

    .detailed ul li:first-child{
        font-size:1.36rem;
        color:#c10000;
    }

    .detailed ul li:first-child

    .nums{
        width:5.92rem;
        height:1.8rem;
        border:0.04rem solid #e0e0e0;
        border-radius: 0.48rem;
        position:relative;
        margin-left:0.8rem; 
    }

    .nums_jian{
        width:1.92rem;
        line-height:1.8rem;
        text-align: center;
        color:#403f3f;
        font-size:1.2rem;
        font-weight: bold;
        position: absolute;
        top:0;
        left:0
    }

    .nums_jia{
       width:1.92rem;
        line-height:1.8rem;
        text-align: center;
        color:#403f3f;
        font-size:1.2rem;
        font-weight: bold; 
        position:absolute;
        top:0;
        left:1.93rem;
    }

     .nums input{
         width:2.06rem;
        line-height:1.8rem;
        text-align: center;
        color:#403f3f;
        font-size:1.2rem;
        font-weight: bold;
         position: absolute;
        top:0;
        right:0;
        border-left:0.04rem solid #e0e0e0;
        border-right:0.04rem solid #e0e0e0;
     }
  
</style>