<template>
  <div>
    <p>子组件一</p>
    <p>子组件一 - 依赖注入接收到的值：{{ count }}</p>
    <Item2></Item2>
  </div>
</template>

<script lang="ts" setup>
import { inject, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
import Item2 from './item2.vue'

export interface Props {
  contentTitle: string | number | boolean
}

// 定义props
const props = withDefaults(defineProps<Props>(), {
  contentTitle: '组件内容标题',
});

const count = inject('count')

onBeforeMount(() => {
  console.log('子组件 - 组合式API - 组件即将开始挂载');
  
})

onMounted(() => {
  console.log('子组件 - 组合式API - 组件挂载完成');
  
})

onBeforeUpdate(() => {
  console.log('子组件 - 组合式API - 组件更新之前');
})

onUpdated(() => {
  console.log('子组件 - 组合式API - 组件更新完成');
  
})

onBeforeUnmount(() => {
  console.log('子组件 - 组合式API - 组件卸载之前');

})

onUnmounted(() => {
  console.log('子组件 - 组合式API - 组件卸载完成');

})

</script>

<style lang="scss">
</style>