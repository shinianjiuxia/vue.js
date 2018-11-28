<template>
<div>
    <div class="wrap">
       <div class="wrap_left">
             <img src="../assets/sort_1.png" alt="">
      </div>
        <h2>
         斯达牛皮纸
        </h2>
    <i class="icon iconfont icon-duanxin"></i>
    </div>
    <div class="content">
        <div class="nav">
            <ul>
                <li>综合</li>
                <li>销量</li>
                <li>价格</li>
                <li>筛选</li>
            </ul>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <div class="img">
                        <img :src='item.src' alt="">
                    </div>
                    <p>{{item.message_title}}</p>
                    <strong>
                        <span>{{item.message_one}}</span>
                        {{item.message_two}}
                        <i class="icon iconfont icon-iconset0308"></i>
                    </strong>
                </li>
            </ul>
        </div>
        <p>没有啦~</p>
    </div>
</div>
</template>

<script>
    export default{
        name:"Pro_list",
        data(){
            return{
                arr:[{
                   src:"./static/pro_list_1.png",
                   message_title:"进口俄罗斯牛卡纸进口牛皮......",
                   message_one:"￥28.8",
                   message_two:"月销5284笔"
                },{
                   src:"./static/pro_list_2.png",
                   message_title:"进口牛皮斯达好牛皮纸进口......",
                   message_one:"￥30.8",
                   message_two:"月销5284笔"
                },{
                   src:"./static/pro_list_3.png",
                   message_title:"进口牛皮纸石头牛皮纸进口.....",
                   message_one:"￥50.8",
                   message_two:"月销125笔"
                },{
                   src:"./static/pro_list_4.png",
                   message_title:"进口牛皮纸涂布牛皮纸进口......",
                   message_one:"￥18.8",
                   message_two:"月销1284笔"
                },{
                   src:"./static/pro_list_5.png",
                   message_title:"进口俄罗斯牛卡纸进口牛皮......",
                   message_one:"￥18.8",
                   message_two:"月销1284笔"
                },{
                   src:"./static/pro_list_6.png",
                   message_title:"进口惠好牛卡纸进口牛皮纸......",
                   message_one:"￥48.8",
                   message_two:"月销1284笔"
                },{
                   src:"./static/pro_list_7.png",
                   message_title:"包标书招标牛皮纸 包装纸......",
                   message_one:"￥30.8",
                   message_two:"月销124笔"
                },{
                   src:"./static/pro_list_8.png",
                   message_title:"餐盘纸牛皮纸一次性吸油纸......",
                   message_one:"￥20.8",
                   message_two:"月销1284笔"
                },{
                   src:"./static/pro_list_9.png",
                   message_title:"牛皮打印纸150克200G......",
                   message_one:"￥30.8",
                   message_two:"月销124笔"
                },{
                   src:"./static/pro_list_10.png",
                   message_title:"A4A3规格牛皮纸包装纸服......",
                   message_one:"￥58.8",
                   message_two:"月销1284笔"
                },]
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
   }

   .nav{
     height:3.12rem;
       background-color: #fff;
   }

    .nav>ul>li{
        width:7.5rem;
        line-height:3.12rem;
        text-align: center;
        float:left;
        list-style: none;
        color:#8a8a8a;
        font-size:0.96rem;
    }

  .nav>ul>li:hover{
      color:#44a11b;
  }

 .list>ul{
     overflow: hidden;
 }

  .list>ul>li{
      width:13.76rem;
      height:15.04rem;
      background-color: #fff;
      margin:0.4rem 0.6rem;
      position:relative;
      float:left;
      list-style: none;
  }

  .list p{
      width:100%;
      color:#434343;
      font-size:0.96rem;
      text-indent: 0.36rem;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      position:absolute;
      bottom:2.24rem;
      left:0.36rem;

  }

  .list strong{
      font-weight:normal;
      position:absolute;
      bottom:0.6rem;
  }

  .list strong>span{
    color:#db0000;
    font-size:1.2rem;
    padding:0  0.5rem;
    font-weight: bold;
  }

   .list strong{
       color:#7a7a7a;
       font-size:0.96rem; 
   }

  .list strong .icon-iconset0308{
     display: inline-block;
    padding:0  0.5rem;
    color:#db0000;
    font-size:1.8rem; 
  }

  .list>ul>li>div>img{
      width:100%;
      height:100%;

  }

  .content>p{
      line-height: 4.08rem;
      width:100%;
      color:#787878;
      font-size:0.96rem;
      text-align: center;
      margin-bottom:4rem;
  }
</style>