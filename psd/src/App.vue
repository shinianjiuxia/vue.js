<template>
  <div id="app">
    <ul>
       <router-link to="/Home" tag="li"> 主页</router-link>
       <router-link to="/Catalogue" tag="li"> 分类</router-link>
       <router-link to="/Car" tag="li"> 购物车</router-link>
       <router-link to="/MyInfo" tag="li"> 我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
html,body,ul{
	margin:0;
	padding:0;
}
ul li{
	list-style: none;

}
ul{
	
	height:(100/15)*1rem;
	background-color:#288300;
	position:absolute;
	bottom:0;
	left:0;
}

</style>
