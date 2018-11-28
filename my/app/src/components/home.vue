<template>
     <div>
         <div class="wrap">
              <i class="icon iconfont icon-erweima"></i>
              
           <div id="pox">
                <input type="text" name="search" placeholder="请输入搜索内容">
                <div id="search">搜索</div> 
           </div>
              <i class="icon iconfont icon-duanxin"></i>
              <p class="one">1</p>
         </div>

    <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/banner1.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/banner2.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../assets/banner3.png" alt=""/></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
    </div>
        
         <div class="commend">
             <ul>
                 <li>
                      <img src="../assets/2.png" alt="">
                      <p>国产牛皮纸</p>
                 </li>
                  <li>
                      <img src="../assets/3.png" alt="">
                      <p>进口牛皮纸</p>
                 </li>
                  <li>
                      <img src="../assets/4.png" alt="">
                      <p>包装牛皮纸</p>
                 </li>
                  <li @click="more">
                      <img src="../assets/5.png" alt="">
                      <p>其他牛皮纸</p>
                 </li>
             </ul>   
         </div>
    <div class="content">
         <div class="new_products">
             <div class="title">
                 <div></div>
                  <h3>最新产品</h3>    
             </div>
              <div class="products">
                   <div class="products_top">
                       <ul>
                           <li v-for="(item,index) in arrTop" :key="index" >
                                 <img :src="item.src" alt="">
                                 <h5>{{item.title}}</h5>
                                 <div></div>
                                 <p>{{item.message}}</p>  
                           </li>
                       </ul>
                   </div>

                   <div class="products_bottom">
                       <ul>
                            <li v-for="(item,index) in arrSub" :key="index">
                                 <img :src="item.src" alt="">
                                 <h5>{{item.title}}</h5>
                                 <div></div>
                                 <p>{{item.message}}</p>  
                           </li>
                       </ul>
                   </div>          
              </div>
         </div>
         <div class="stencil">
            <div class="ad">
               <div class="img_one">
                  <img src="../assets/12.png" alt="">
              </div>
              <div class="img_two">
                  <img src="../assets/13.png" alt="">
              </div>
                <div class="img_sceend">
                  <img src="../assets/14.png" alt="">
              </div>
                <div class="img_fouer">
                  <img src="../assets/15.png" alt="">
              </div>
               <div class="download">
                  <img src="../assets/16.png" alt="">
              </div>
            </div>
            <div class="productDetails">
                <div class="title">
                 <div></div>
                  <h3>最新产品</h3>    
               </div>
               <ul>
                   <li v-for="(item,index) in arrList" :key="index">
                     <div class="productDetails_left">
                          <div>
                             <img :src="item.imgOne" alt="">
                          </div>
                       <h4>
                            {{item.titleOne}}
                           <span>{{item. pirceOne}}</span>
                        </h4> 
                     </div>
                     <div class="productDetails_right">
                          <div>
                             <img :src="item.imgTwo" alt="">
                          </div>
                       <h4>
                            {{item.titleTwo}}
                           <span>{{item. pirceTwo}}</span>
                        </h4> 
                     </div>
                   </li>
               </ul>
            </div> 
         </div>

          <div class="stencil">
              <div class="ads">
                  <div class="ads_one">
                       <img src="../assets/24.png" alt="">
                  </div>
                  <div  class="ads_Two">
                       <img src="../assets/25.png" alt="">
                  </div>
                  <div  class="ads_sceend">
                      <img src="../assets/23.png" alt="">
                  </div>
              </div>
            <div class="commodity_use">
                <div class="title_two">
                 <div></div>
                  <h3>商品用途</h3>    
               </div>
               <ul>
                   <li v-for="(item,index) in arrUser" :key="index">
                      <div class="commodity_use_left">
                           <div>
                             <img :src="item.srcLeft" alt="">
                          </div>
                       <h4>
                           {{item.titleLeft}}
                           <span>{{item.pirceLeft}}</span>
                        </h4> 
                      </div>
                      <div class="commodity_use_center">
                           <div>
                              <img :src="item.srcCenter" alt="">
                          </div>
                       <h4>
                             {{item.titleCenter}}
                           <span>{{item.pirceCenter}}</span>
                        </h4> 
                      </div>
                      <div class="commodity_use_right">
                          <div>
                              <img :src="item.srcRight" alt="">
                          </div>
                       <h4>
                            {{item.titleRight}}
                           <span>{{item.pirceRight}}</span>
                        </h4> 
                      </div>
                   </li>
              </ul>    
            </div> 
            <div class="sloat"></div>
         </div>
    </div>  
     </div>
</template>

<script>
//引入Swiper插件
import Vue from 'vue';
import Swiper from 'vue-awesome-swiper';
Vue.use(Swiper);
import 'swiper/dist/css/swiper.css';
//import { swiper, swiperSlide } from 'vue-awesome-swiper'

   export default {
   name: 'Home',
   data( ) {
       return {
         arrTop:[{
             src:"./static/6.png",
             title:"包装牛皮纸",
             message:"绿色环保，韧性好"
         },{
            src:"./static/7.png",
            title:"玖龙牛皮纸",
            message:"用途广泛，口碑好"
         },{
            src:"./static/8.png",
            title:"青山牛皮纸",
            message:"纸张物理性能优良"  
         }],

         arrSub:[{
             src:"./static/9.png",
             title:"泰格牛皮纸",
             message:"价格低廉,用途广泛" 
         },{
            src:"./static/10.png",
            title:"美国牛卡纸",
            message:"双面效果,正面细腻"
         },{
            src:"./static/11.png",
            title:"斯达牛皮纸",
            message:"表面光滑无杂质"
         }],
       
        arrList:[{
           imgOne:"./static/17.png",
           imgTwo:"./static/18.png",
           titleOne:"本色牛皮包装纸",
           titleTwo:"斯达包装牛皮纸",
           pirceOne:"￥50",
           pirceTwo:"￥55"
         },{
           imgOne:"./static/19.png",
           imgTwo:"./static/20.png",
           titleOne:"白色包装牛皮纸",
           titleTwo:"单面牛皮纸",
           pirceOne:"￥50",
           pirceTwo:"￥50"
         },{
           imgOne:"./static/21.png",
           imgTwo:"./static/22.png",
           titleOne:"双面牛皮纸",
           titleTwo:"印刷牛皮纸",
           pirceOne:"￥50",
           pirceTwo:"￥50"
         }],

       arrUser:[{
          srcLeft:"./static/26.png",
          srcCenter: "./static/27.png",
          srcRight:"./static/28.png",
          titleLeft:"打包牛皮纸",
          titleCenter:"手提袋牛皮纸",
          titleRight:"吊牌牛皮纸",
          pirceLeft:"￥50",
          pirceCenter:"￥50",
          pirceRight:"￥50"
       },{
          srcLeft:"./static/29.png",
          srcCenter: "./static/30.png",
          srcRight:"./static/31.png",
          titleLeft:"纸箱牛皮纸",
          titleCenter:"印刷牛皮纸",
          titleRight:"书签牛皮纸",
          pirceLeft:"￥50",
          pirceCenter:"￥50",
          pirceRight:"￥50"
       },{
          srcLeft:"./static/32.png",
          srcCenter: "./static/33.png",
          srcRight:"./static/34.png",
          titleLeft:"水泥袋纸",
          titleCenter:"信封牛皮纸",
          titleRight:"食品打包袋",
          pirceLeft:"￥50",
          pirceCenter:"￥50",
          pirceRight:"￥50"
       }],
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
  
   
} ,
 methods:{
       more(){
          this.$router.push('/pro_list')
       }
      

   }
   }
</script>

<style lang="" scoped>

   .wrap{
       width:100%;
       height:3.52rem;
       background-color: #44a11b;
       position: fixed;
       top:0;
       left:0;
       z-index: 999;
   } 

   #pox{
      
       width:20.9rem;
       margin: 0.4rem auto;
       font-family: 'Microsoft YaHei';
    
   }

    #pox input{
      width: 15.28rem;
      height:2.64rem; 
      float:left;
      background-color: #fff;
      background-image: url(../assets/1.png);
      background-repeat: no-repeat;
      background-size:1rem;
      background-position:0.2rem center;
      padding:0 0 0 1.6rem;
      color:#a09d9d;
      font-size: 0.96rem;
    }

    #search{
        width:4rem;
        float: right;
        background: #aeff8a;
        color: #44a11b;
        font-size: 1.04rem;
        text-align: center;
        line-height: 2.64rem;
        cursor: pointer;
    }

    .icon-duanxin{
      position:absolute;
      right:1.6rem;
      top:0.32rem;
      color:#fff;
    }

    .icon-erweima{
      position:absolute;
      left:1.6rem;
      top:0.32rem;
      color:#fff;
    }
    .one{
      position:absolute;
      right:0.8rem;
      top:-0.7rem;
      color:#e10000;
      font-size:0.96rem;
    }

    .banner{
        width:100%;
        height:12.8rem;
        position:absolute;
        top:3.52rem;
    }

    .commend{
        width:100%;
       height:8.32rem;
       background-color: #fff;
       position:absolute;
       top:16.32rem;
       left:0;
    }

    .commend>ul>li>img{
        width:5.44rem;
        height:5.44rem;
      
    }
   
    .commend>ul{
        display:-webkit-flex;
        display:flex;
        justify-content: space-between;
        align-items: center;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
        list-style: none;
    }

    .commend>ul>li>p{
        color:#606060;
        font-size:0.86rem;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-left:0.64rem;
    }
   
   .content{
       width:100%;
       position:absolute;
       top:25.2rem;
       left:0;
   }

    .new_products{
        margin-left:0.4rem;
    }

   .new_products .title {
       width:100%;
       height:2.56rem; 
       background-color:#fff;  
       overflow: hidden;
   }

    .new_products .title>div{
        width:1.2rem;
        height:2.56rem;
        background-color:#65a847;
        float:left;
    }

    .new_products .title>h3{
        display:inline-block;
        color:#65a847;
        font-size:1.12rem;
        line-height:2.56rem; 
        text-indent: 0.64rem;
        margin-block-start: 0;
        margin-block-end: 0;
       
    }

    .products{
        width:29.2rem;
        height:25.12rem;
        border:1px solid #dddddd;
    }

    .products_top{
        width:100%;
        height:12.24rem;
        background-color:#fff;
    }
   
    .products_top>ul{
        overflow: hidden;
    }
     .products_top>ul>li{
         float:left;
         list-style: none;
         border-right:0.32rem solid #e2e2e2;
         width:9.4rem;
         height:12.24rem;
         position:relative;
     }

      .products_top>ul>li>img{
        width:8.16rem;
        height:8.84rem;  
      }

      .products_top>ul>li>h5{
          color:#5d5858;
          font-size:1.04rem;
          position:absolute;
          bottom:2.08rem;
          left:2.08rem;
      }

       .products_top>ul>li>div{
           width:6.4rem;
           height:0.08rem;
           background-color: #5d5858;
           position:absolute;
           bottom:1.76rem;
           left:1.44rem;
       }

    .products_top>ul>li>p{
        font-size:1rem;
        color:#5d5858;
        position:absolute;
        left:0.48rem;
        bottom:-0.8rem;
    }
 
   .products_bottom{
       margin-top:0.64rem;
   }

   .products_bottom{
        width:100%;
        height:12.24rem;
        background-color:#fff;
    }
   
    .products_bottom>ul{
        overflow: hidden;
    }
     .products_bottom>ul>li{
         float:left;
         list-style: none;
         width:9.4rem;
         height:12.24rem;
         border-right:0.32rem solid #e2e2e2;
         position:relative;
     }

      .products_bottom>ul>li>img{
        width:8.16rem;
        height:8.84rem;  
      }

      .products_bottom>ul>li>h5{
          color:#5d5858;
          font-size:1.04rem;
          position:absolute;
          bottom:2.08rem;
          left:2.08rem;
      }

       .products_bottom>ul>li>div{
           width:6.4rem;
           height:0.08rem;
           background-color: #5d5858;
           position:absolute;
           bottom:1.76rem;
           left:1.44rem;
       }

     .products_bottom>ul>li>p{
        font-size:1rem;
        color:#5d5858;
        position:absolute;
        left:0.48rem;
        bottom:-0.8rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    .ad{
        width:100%;
        height:4.4rem;
        background-color:#ef7e32;
        margin-top:0.68rem;
        position:relative;
    }

    .productDetails{
         width:29.2rem;
         border-color:#fff;
         height:41.28rem;
         margin:0 auto;

    }

    .img_one{
        width:10.48rem;
        height:1.12rem;
        position:absolute;
        top:1.04rem;
        left:11.04rem;
    }

    .img_two{
        width:5.6rem;
        height:2.12rem;
        position:absolute;
        bottom:0;
        left:13.76rem;
    }
    
    .img_sceend{
        width:6.16rem;
        height:4.4rem;
        position:absolute;
        bottom:0;
        left:5.08rem;
    }

     .img_fouer{
        width:4.68rem;
        height:3.36rem;
        position:absolute;
        bottom:0.6rem;
        left:0.4rem;
     }

    .download{
        width:6.88rem;
        height:1.96rem;
        position:absolute;
        bottom:0;
        right:0.4rem;
     }

    .productDetails .title{
       width:100%;
       height:2.56rem; 
       background-color:#fff;  
       overflow: hidden;
     }

    .productDetails .title>div{
        width:1.2rem;
        height:2.56rem;
        background-color:#e744c1;
        float:left;
    }

    .productDetails .title>h3{
        display:inline-block;
        color:#e744c1;
        font-size:1.12rem;
        line-height:2.56rem; 
        text-indent: 0.64rem;
        margin-block-start: 0;
        margin-block-end: 0;
        font-weight: bold; 
    }

  .stencil{
      background-color: #fff;
  }

  .productDetails>ul>li{
      width:100%;
      height:13.2rem;
      position:relative;
  }
  .productDetails_left{
    width:14.36rem;
    height:13.2rem;
    position:absolute;
    top:0;
    left:0;
  }

  .productDetails_left>div{
    width:14.24rem;
    height:9.68rem;
    border:0.04rem solid #d9d9d9;
  }

  .productDetails_left>div>img{
    width:11.04rem;
    height:8.88rem; 
    margin-top:0.4rem;
    margin-left:1.2rem;
  }

   .productDetails_left>h4{
     width:14.36rem;
     height:2.2rem;
     background-color: #e0e0e0;
     margin-top:0.64rem;
     line-height:2.2rem;
     text-align:center;
    }
   .productDetails_right{
    width:14.36rem;
    height:13.2rem;
   
    position:absolute;
    top:0;
    right:0;

  }

  .productDetails_right>div{
    width:14.24rem;
    height:9.68rem;
    border:0.04rem solid #d9d9d9;
  }

  .productDetails_right>div>img{
    width:11.04rem;
    height:8.88rem; 
    margin-top:0.4rem;
    margin-left:1.2rem;
  }

   .productDetails_right>h4{
     width:14.36rem;
     height:2.2rem;
     background-color: #e0e0e0;
     margin-top:0.64rem;
     line-height:2.2rem;
     text-align:center;
    }

    .ads{
        width:29.2rem;
        height:5.28rem;
        position:relative;
    }

    .ads_one{
       width:50%;
       height:4.32rem; 
       position:absolute;
       bottom:0;
       right:0;
    }

     .ads_Two{
       width:50%;
       height:4.32rem;
       position:absolute;
       bottom:0;
       left:0; 
    }

    .ads_sceend{
       width:6.96rem;
       height:1.76rem;
       background-color: #ee9297;
       line-height:1.76rem;
       position:absolute;
       bottom:0;
       right:0; 
    }

   .title_two{
       width:100%;
       height:2.56rem; 
       background-color:#fff;  
       overflow: hidden;
     }

    .title_two>div{
        width:1.2rem;
        height:2.56rem;
        background-color:#ff6177;
        float:left;
    }

   .title_two>h3{
        display:inline-block;
        color:#ff6177;
        font-size:1.12rem;
        line-height:2.56rem; 
        text-indent: 0.64rem;
        margin-block-start: 0;
        margin-block-end: 0;
        font-weight: bold; 
    }

    .commodity_use{
        width:29.2rem;
        margin:0 auto;
    }
    .commodity_use>ul{
        width:29.2rem;
    }

  .commodity_use>ul>li{
      width:100%;
      height:13.2rem;
      position:relative;
  }

   .commodity_use_left{
    width:9.44rem;
    height:10.52rem;
    position:absolute;
    top:0;
    left:0;
  }

   .commodity_use_left>div{
    width:9.44rem;
    height:10.52rem;
    border:0.04rem solid #d9d9d9;
  }

   .commodity_use_left>div>img{
    width:9.44rem;
    height:10.52rem;
  }

   .commodity_use_left>h4{
      width:9.44rem;
     height:2.2rem;
     background-color: #e0e0e0;
     margin-top:0.64rem;
     line-height:2.2rem;
     text-align:center;
    }

    .commodity_use_center{
    width:9.44rem;
    height:10.52rem;
    position:absolute;
    top:0;
    left:9.88rem;
  }

   .commodity_use_center>div{
    width:9.44rem;
    height:10.52rem;
    border:0.04rem solid #d9d9d9;
  }

    .commodity_use_center>div>img{
    width:9.44rem;
    height:10.52rem;
  }

   .commodity_use_center>h4{
     width:9.44rem;
     height:2.2rem;
     background-color: #e0e0e0;
     margin-top:0.64rem;
     line-height:2.2rem;
     text-align:center;
    }

     .commodity_use_right{
    width:9.44rem;
    height:10.52rem;
    position:absolute;
    top:0;
    right:0;
  }

   .commodity_use_right>div{
    width:9.44rem;
    height:10.52rem;
    border:0.04rem solid #d9d9d9;
  }

   .commodity_use_right>div>img{
    width:9.44rem;
    height:10.52rem;
  }

   .commodity_use_right>h4{
     width:9.44rem;
     height:2.2rem;
     background-color: #e0e0e0;
     margin-top:0.64rem;
     line-height:2.2rem;
     text-align:center;
    }
    .sloat{
        margin-top:20rem;
    }
</style>