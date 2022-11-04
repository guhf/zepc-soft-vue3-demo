<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <RouterLink to="/composition">一. 响应式编程和组合式API</RouterLink>
        <RouterLink to="/template">二. Vue模板应用</RouterLink>
        <RouterLink to="/component">三. Vue组件系统 - 基础组件</RouterLink>
        <RouterLink to="/property">四. Vue组件系统 - 属性和方法</RouterLink>
        <RouterLink to="/advance">五. Vue组件系统 - 组件进阶</RouterLink>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.container{
  display: flex;
  flex-direction: column;

  .wrapper{
    display: flex;
    flex-direction: row;
    
    *{
      margin-left: 15px;
    }
  }
}
</style>
