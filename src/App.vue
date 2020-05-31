<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import {initDynamicRouters} from '@/router'
export default {
  name: 'app',
  created(){ 
    initDynamicRouters()
  }
}
</script>

<style>
</style>
