<template>
  <div id="app">
    <div class="box">
       <ul>
          <router-link to="/Home" tag="li" >
             <i class="icon iconfont icon-zhuye01"></i>
               主页
           </router-link>
          <router-link to="/Sort" tag="li"> 
            <i class="icon iconfont icon-jichushijianfenlei"></i>
               分类
          </router-link>
          <router-link to="/Car" tag="li"> 
            <i class="icon iconfont icon-iconset0308"></i>
               购物车
          </router-link>
          <router-link to="/MyInfo" tag="li">
            <i class="icon iconfont icon-wode"></i>
               我的
           </router-link>
       </ul>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
@import "assets/font/iconfont.css" ;

body{
  margin:0;
  padding:0;
}

input{
  background:none;
  outline:none;
  border:0;
}

ul{
  list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
}

h2,h3,h4,h5{
  font-weight:normal;
  margin:0;
  padding:0;
}

body{
  background-color:#dbdbdb;
}

  .box>ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
}

.box>ul li{
  float:left;
  list-style: none;
  width:25%;
  height:4rem;
  text-align: center;
  font-size: 1rem;
  color:#3fcc00;
 
}
.box{
  width:100%;
  height:4rem;
  position:fixed;
  bottom:0;
  z-index:999;
}
.box>ul{
  width:100%;
  height:4rem;
  background-color:#288300;
}

.icon{
  font-size:2.08rem;
  display:block;
}

.sloat{
        margin-top:20rem;
    }
</style>
