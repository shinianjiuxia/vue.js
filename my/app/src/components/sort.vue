<template>
    <div>
        <div class="wrap">
            <div class="wrap_left">
               <img src="../assets/sort_1.png" alt="">
            </div>
            <div id="pox">
                <input type="text" name="search" placeholder="请输入搜索内容">
                <div id="search">搜索</div> 
           </div> 
              <i class="icon iconfont icon-erweima"></i>   
         </div>
         <div class="content">
              <div class="hot_search">
                  <ul>
                      <li class="active" @click="search">热门搜索</li>
                      <li>国产牛皮纸</li>
                      <li>进口牛皮纸</li>
                      <li>包装牛皮纸</li>
                      <li>本色牛皮纸</li>
                  </ul>
              </div>
              <div class="relative_products" >
                  <ul>
                      <li v-for="(item,index) in arr" :key="index" @click="pro_details">
                         <div class="relative_products_left">
                       <div>
                            <img :src="item.srcLeft" alt="">
                       </div>
                       <h5>
                           {{item.messageLeft}}
                       </h5>
                  </div>
                  <div class="relative_products_right">
                       <div>
                            <img :src="item.srcRight" alt="">
                       </div>
                       <h5>
                           {{item.messageRight}}
                       </h5>
                  </div>
                      </li>
                  </ul>
                  
              </div>
         </div>
          <div class="sloat"></div>
    </div>
</template>

<script>
    export default{
        name:'Sort',
        data(){
            return{
                arr:[{
                    srcLeft:"./static/sort_2.png",
                    srcRight:"./static/sort_3.png",
                    messageLeft:"美国进口斯达牛皮纸",
                    messageRight:"韩国进口青山牛皮纸"
                },{
                    srcLeft:"./static/sort_4.png",
                    srcRight:"./static/sort_5.png",
                    messageLeft:"国产包装青山牛皮纸",
                    messageRight:"美国进口玖龙牛皮纸"
                },{
                    srcLeft:"./static/sort_6.png",
                    srcRight:"./static/sort_7.png",
                    messageLeft:"俄罗斯进口牛卡纸",
                    messageRight:"俄罗斯进口牛卡纸"
                },{
                    srcLeft:"./static/sort_8.png",
                    srcRight:"./static/sort_9.png",
                    messageLeft:"国产打包专用牛皮纸",
                    messageRight:"国产本色包装牛皮纸"
                }]
            }
        },
        methods:{
          search(){
              this.$router.push('/pro_search')
          },
          pro_details(){
              this.$router.push('/pro_details') 
          }
        }
    }
</script>

<style lang="">
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

   .wrap_left>img{
       width:1rem;
       height:2rem;
       color:#fff;
       margin-left: 1rem;
       margin:0 auto;
       display: inline-block;
   }

    #pox{
      
       width:20.9rem;
       margin: 0.4rem auto;
       font-family: 'Microsoft YaHei';
       position:absolute;
        bottom:0;
       left:5.12rem
    
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

    .icon-erweima{
      position:absolute;
      right:1.0rem;
      top:0.42rem;
      color:#fff;
    }

    .content{
      width:29.2rem;
      margin:0 auto;
      margin-top:3.52rem;
      overflow: hidden;
    }

    .hot_search{
        width:5.6rem;
        float:left;
    }

     .hot_search>ul>li{
        width:5.6rem;
        line-height:3.92rem; 
        color:#4b4b4b;
        font-size:0.96rem; 
        text-align:center;
     }

     .active{
         background-color:#fff;
         font-weight:bold;
     }

      .hot_search>ul>li:hover{
        background-color:#fff;
         font-weight:bold;
      }

     .relative_products{
        width:23.6rem;
        background-color: #fff;
        float:right;
        overflow: hidden;
     }

     .relative_products_left{
        width:11.8rem;
        float:left;
     }

     .relative_products_left>div{
         height:10.24rem;
         width:11.8rem;   
     }

     .relative_products_left>div>img{
         margin-left:0.9rem;
         margin-top:0.62rem;
         height:9rem;
         width:10rem;
     }

      .relative_products_left>h5{
         line-height:2rem;
         width:11.8rem;
         color:#434343;
         font-size:0.96rem;
         text-align:center;
      }

     .relative_products_right{
        width:11.8rem;
        float:left;
     }

     .relative_products_right>div{
         height:10.24rem;
         width:11.8rem; 
     }

      .relative_products_right>div>img{
         margin-left:0.9rem;
         margin-top:0.62rem;
         height:9rem;
         width:10rem;
     }

    .relative_products_right>h5{
         line-height:2rem;
         width:11.8rem;
         color:#434343;
         font-size:0.96rem;
         text-align:center;
      }

      .relative_products>ul>li{
          list-style: none;
      }
    
</style>