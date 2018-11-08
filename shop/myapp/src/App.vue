<template>
   <div>
      <ul class="nav">
		   	<router-link v-for="item in arr" :to="item.path" tag="li">{{item.title}}</router-link>
	  	</ul>
		<router-view></router-view>
   </div>
</template>

<script>
	export default {
		name:'App',
		data(){
			return{
				arr:[{
					title:'首页',
					path:'/home'
				},{
					title:'课程列表',
					path:'/couser'
				},{
					title:'我的课程',
					path:'/myCouser'
				},{
					title:'学习中心',
					path:'/info'
				}]
			}
		}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body,html,ul{
  margin:0;
  padding:0;
}

.nav{
		position: fixed;
		left:0;
		bottom:0;
		height: 100px;
		width: 100%;
		border-top:1px solid #000;
	}
	.nav li{
		list-style: none;
		float: left;
		width: 25%;
		height: 100%;
		line-height: 100px;
		text-align: center;
	}
	.nav .router-link-active{
		background: green;
		color: #fff;
	}
</style>
