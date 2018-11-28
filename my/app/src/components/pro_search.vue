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
   <div class="header">
       <img src="../assets/pro_search_1.png" alt="">
       <h3>热门搜索</h3>
   </div>
   <div class="content">
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                {{item}}
            </li>
        </ul>
        <div class="notes">
             <div class="del_notes">
                  清空搜索历史
             </div>
             <div class="key_search">
                 <div class="search_field">
                         <img class="photo" src="../assets/pro_search_2.png" alt="">
                      <input type="text" placeholder="iMessage">  
                      <img  class="tell" src="../assets/pro_search_3.png" alt="">  
                 </div>
                 <div class="key">
                     <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                     </ul>
                 </div>
             </div>
        </div>
   </div>
 </div>
</template>

<script>
   export default{
        name:'Pro_search',
        data(){
            return{
                arr:["青山牛皮纸","泰格牛皮纸","斯达牛皮纸","玖龙牛皮纸","美国牛卡纸","美国牛卡纸","单面牛皮纸","双面牛皮纸","双面牛皮纸","包装牛皮纸"]
            }
        }
    }
</script>

<style lang="">
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

    .header{
        margin-top:3.52rem;
        height:3.68rem;
        border-bottom:0.04rem dotted #c8c8c8;
    }

    .header img{
        float:left;
        width:1.2rem;
        height:2.04rem;
        margin-top:1.05rem;
        margin-left:1.2rem;
    }

    .header h3{
        float:left;
        line-height: 3.32rem;
        margin-top:0.36rem;
        color:#44a11b;
        font-size:1.2rem;
        letter-spacing: 0.16rem;
        margin-left:0.56rem;
        font-weight: bold;
    }

   .content>ul{
     overflow: hidden;
   }

    .content>ul>li{
        color:#808080;
        font-size:1.04rem;
        padding:1.2rem 1.0rem;
        float:left;
        list-style: none;
    }

    .del_notes{
        width:7.4rem;
        line-height:2.2rem;
        background-color: #d8d8d8;
        color:#7d7d7d;
        font-size:0.96rem;
        text-align: center;
        margin:0 auto;
    }

    .key_search{
        border-top:0.04rem dotted #adadad;
        margin-top:2.4rem;
    }

    .search_field{
        width:100%;
        height:3.52rem;
    }

    .search_field .photo{
        width:2.12rem;
        height:1.52rem;
        padding:1rem 1rem;
        vertical-align: middle;
       
    }

    .search_field .tell{
        width:2.12rem;
        height:2.12rem;
        vertical-align: middle;
        padding:1rem 1rem;
    }

     .search_field input{
         width:21rem;
         height:2.32rem;
         border-radius: 0.4rem;
         border:1px solid #c7c7cc;
         padding:0!important;
         font-size:1.36rem;
         color:#c8c8ce;
         text-indent: 0.72rem;
         line-height: 2.32rem;
        
     }

     .key{
         width:100%;
         height:17.36rem;
         background-color: #d2d5dc;
     }

     .notes{
         position:absolute;
         bottom:4rem;
         left:0;
     }

</style>