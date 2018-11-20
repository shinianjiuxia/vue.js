<template>
  <div id="app">
    <img src="@/assets/start.png" @click="enter" v-show="show"/>
    <ul v-show="!show" class="tabber">
       <router-link to="/Home" tag="li"> 主页</router-link>
       <router-link to="/Home" tag="li"> 分类</router-link>
       <router-link to="/Home" tag="li"> 购物车</router-link>
       <router-link to="/Home" tag="li"> 我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
     return{
        show:true
     }
  },
  methods:{
    enter(){
      this.$router.push("/Home")
    }
  },
  created() {
     
     if(this.$route.path=="/"){
         
     }else{
         this.show = false;
     }
  },
  watch:{
    $route:{
      handler:function(){
         if(this.$route.path=="/"){
         this.show = true;
        }else{
         this.show = false;
      }
      },
      deep:true
    }
  }
}
</script>

<style>
body,html{
  width:(750/15)*1rem;
  height:100%;
  overflow: hidden;
}

#app{
 width:(750/15)*1rem;
}

.tabber{
  position:fixed;
  bottom:0;
  left:0;
  width:(750/15)*1rem;
  height:(100/15)*1rem;
  background-color:#288300;
}

.tabber li{
  float:left;
  width:(750/4/15)*1rem;
  font-size:(24/15)*1rem;
  color:#3fcc00;
  list-style: none;
}
</style>
