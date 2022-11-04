<template>
  <div>
    <p>子组件二</p>
    <p>子组件二 - 依赖注入接收到的值：{{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';


const count = inject('count')
</script>

<style lang="scss">

</style>