<template>
    <div>
         <div class="wrap">
            <div class="wrap_left">
               <img src="../assets/sort_1.png" alt="">
            </div>
            <h2>
                购物车
                <span>(3)</span>
            </h2>
              <i class="icon iconfont icon-duanxin"></i>
         </div>
         <div class="content">
            <div class="car_header">
                <input type="checkbox">
                <span>全选</span>
                <i>编辑</i>
            </div>
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                  <input type="checkbox">  
                  <div class="img">
                      <img :src="item.src" alt="">
                  </div>
                  <ul>
                     <li>{{item.message_one}}</li>
                     <li>{{item.message_two}}</li>
                     <li>{{item.message_sceend}}</li>
                    <li><span>{{item.message_span}}</span>{{item.message_fouer}}</li>
                  </ul>
                    <div class="count">
                       <div class="num_jian">-</div>
                       <input type="text" value="1" class="num" ref="input">
                    <div class="num_jia" @click="add">+</div>
              </div>
                </li>
            </ul>
             
            <div class="sum">
                   <p>
                        合计：<span>￥128.6</span>
                   </p>
                   <input type="button" value="立即结算" @click="balance">
            </div>
         </div>
    </div>
</template>

<script>
    export default{
        name:'Car',
        data(){
            return{
                arr:[{
                    src:"./static/car_1.png",
                    message_one:"牛皮纸大张 120g ",
                    message_two:"牛皮包装纸...... ",
                    message_sceend:"牛皮纸【A4】80克",
                    message_span:"￥28.8",
                    message_fouer:"￥38.8"
                    
                },{
                    src:"./static/car_2.png",
                    message_one:"整张全开牛皮纸",
                    message_two:"1K80克120...... ",
                    message_sceend:"牛皮纸【A8】100克",
                    message_span:"￥38.8",
                    message_fouer:"￥38.8"
                },{
                    src:"./static/car_3.png",
                    message_one:"联木正度全开/半",
                    message_two:"开4开4K大度......",
                    message_sceend:"牛皮纸【A4】100克",
                    message_span:"￥48.8",
                    message_fouer:"￥38.8"
                },{
                    src:"./static/car_4.png",
                    message_one:"10张包邮牛皮纸 ",
                    message_two:"80/120/150g......",
                    message_sceend:"牛皮纸【A3】200克",
                    message_span:"￥68.8",
                    message_fouer:"￥38.8"
                }]
            }
        },
        mounted() {
            this.init();
        },
        methods:{
            balance () {
                 this.$router.push('/confirm_order')
            },
            init (){
                const self = this;
                console.log(this.$refs.input.name)
            },
            add(){
                self.$refs.input.value+=value
               
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
       background-color: #fff;
       margin-top:3.52rem;
   }

   .car_header{
       height:2.96rem;
       width:100%;
       border-bottom:1px solid #b1b1b1;
       position:relative;
   }

    .car_header input{
        border:1px solid #b1b1b1;
        width:1.04rem;
        height:1.04rem;
        position:absolute;
        top:1.16rem;
        left:1.48rem;
    }

     .car_header span{
         color:#4a4a4a;
         font-size:1.04rem;
         font-weight:bold;
         position:absolute;
         top:1rem;
         left:3.24rem;
     }

     .car_header i{
        font-style: normal;
         color:#4a4a4a;
         font-size:1.04rem;
         font-weight:bold;
         position:absolute;
         top:1rem;
        right:1.4rem;
     }
   
   .content>ul>li{
       width:100%;
       height:9.4rem;
      border-bottom:1px solid #b1b1b1;
      position:relative;
   }

    .content>ul>li>input{
        border:1px solid #b1b1b1;
        width:1.04rem;
        height:1.04rem;
        position:absolute;
        top:4.16rem;
        left:1.48rem;
    }

     .content>ul>li .img{
        width:7.68rem;
        height:7.4rem;
        position: absolute;
        top:1rem;
        left:3.68rem;
     }
    .content>ul>li>ul{
        width:8.16rem;
        height:7.52rem;
        position:absolute;
        top:1rem;
        left:12.40rem;
        list-style: none;
        color:#4c4c4c;
        font-size:1.04rem;
    }

    .content>ul>li>ul>li:nth-child(3){
        line-height: 2.8rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        color:#808080;
        font-size:0.88rem;
    }

   .content>ul>li>ul>li:nth-child(4){
      color:#adaaaa;
      font-size:0.96rem;
   }

    .content>ul>li>ul>li:nth-child(4)>span{
      color:#a11b1b;
      font-size:1.12rem;
      padding:0.2rem
    }
    
    .count{
        width:8.6rem;
        height:2.2rem;
        border:1px solid #b1b1b1;
        overflow: hidden;
        border-radius: 0.48rem;
        position:absolute;
        top:3.52rem;
        right:0.4rem;
    }

   .count .num_jian {
      width:2.48rem;
      line-height:2.2rem;
      color:#4c4c4c;
      font-size:1.04rem;
      text-align: center;
      float:left;
      
     }

     .count .num{
         width:2.76rem;
        line-height:2.2rem;
        color:#4c4c4c;
        font-size:1.04rem;
        border-left:1px solid #b1b1b1;
        border-right:1px solid #b1b1b1;
        text-align: center;
        float:left;
     }

    .num_jia{
      width:2.48rem;
      line-height:2.2rem;
      color:#4c4c4c;
      font-size:1.04rem;
      text-align: center;
      float:left;
    }

    .sum{
        width:100%;
        height:3.92rem;
        position:relative;
    }

     .sum p{
      color:#4c4c4c;
      font-size:1.04rem; 
      line-height:3.92rem;
      text-align: center; 
     }

    .sum p>span{
        color:#a11b1b;
        font-size:1.2rem;
        font-weight:bold;
    }

    .sum>input{
        width:8.96rem;
        height:2.16rem;
        background-color: #a11b1b;
        position:absolute;
        top:1.12rem;
        right:0.4rem;
       color:#fff;
        font-size:1.2rem;
    }
</style>