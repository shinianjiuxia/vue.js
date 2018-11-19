<template>
  <div id="app">
<mt-tabbar v-model="selected">
   
      <mt-tab-item id="外卖">
          <i  slot="icon" class="icon iconfont icon-iconset0308"></i>
      外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      <i class="icon iconfont icon-wode"></i>
      订单
    </mt-tab-item>
    <mt-tab-item id="发现">
       <i class="icon iconfont icon-zhuye01"></i>
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
       <i class="icon iconfont icon-zhuye01"></i>
      我的
    </mt-tab-item>
</mt-tabbar>
    
  </div>
</template>

<script>
 import { Tabbar, TabItem } from 'mint-ui';
   
export default {
  name: 'App',
  Tabbar, 
  TabItem
}
</script>

<style>
#app {
 
}
</style>
