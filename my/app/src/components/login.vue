<template>
 <div>
    <div class="wrap">
        <div class="wrap_left">
             <img src="../assets/sort_1.png" alt="">
        </div>
         <h2>
            登陆
        </h2>
           <div class="reg">注册</div>   
    </div>
    <div>
        <input type="text" class="tell" placeholder="请输入您的手机号/邮箱">
        <div class="pass">
            <input type="password" placeholder="请输入您的密码（6位数以上）">
            <span>忘记密码？</span>
        </div>
        <div class="securityCode">
            <input type="text" placeholder="验证码">
            <span>获取验证码</span>
        </div>
        <input type="text" class="login" placeholder="登陆">
        <p class="more">其他登陆方式</p>
        <ul>
            <li>
                <img src="../assets/login_1.png" alt="">
                QQ登陆  
            </li>
            <li>
                <img src="../assets/login_2.png" alt="">
                微信登陆
            </li>
            <li>
                <img src="../assets/login_3.png" alt="">
                支付宝登陆
            </li>
           
        </ul>
    </div>
</div>   
</template>

<script>
    export default{
        name:'Login',
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
       left:13.12rem;
       top:0.9rem;
   }
   .reg{
       color:#fff;
       font-size:0.96rem;
       display: inline-block;
       position:absolute;
      line-height: 3.52rem;
       right:1.76rem;
       top:0;
   }

   .tell{
       width:26.8rem;
       height:3.12rem;
       background-color: #fff;
       margin-top:6.56rem;
      margin-left:1.28rem;
      color:#adadad;
      font-size:1.04rem;
      text-indent: 1.36rem;
      line-height:3.12rem;
   }

   .pass input{
    width:21.4rem;
    height:3.36rem;
    margin-left:1.28rem;
    margin-top:1.64rem;
    color:#adadad;
    font-size:1.04rem;
    text-indent: 1.36rem;
     line-height:3.36rem;
    background-color: #fff;
   }

   .pass span{
    color:#a11b1b;
    font-size:0.88rem;
    text-indent: 1.36rem;
   }

   .securityCode input{
       width:19.36rem;
       height:3.16rem;
       background-color: #fff; 
       margin-left:1.28rem;
      margin-top:1.64rem;
      color:#adadad;
      font-size:1.04rem;
      text-indent: 1.36rem; 
   }

     .securityCode span{
       width:7.6rem;
       font-size:1.04rem;
     }

     .login{
        width:26.76rem;
        height:3.16rem;
        background-color: #44a11b; 
        margin-left:1.28rem;
        margin-top:1.64rem;
        color:#fff;
        font-size:1.04rem;
       text-align: center;
     }

     .more{
        color:#4a4a4a;
         font-size:1.04rem;
       text-align: center;
     }

     ul li img{
      display: block;
      margin:0 auto;
    
     }

      ul li{
         list-style: none;
         margin-left:2.8rem;
         width:20.333%;
         text-align: center;
         float:left;
         margin-top:1.64rem;
      }

     

</style>