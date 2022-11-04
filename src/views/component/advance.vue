<template>
  <div>
    <p>组件进阶</p>

    <Item1 :contentTitle="212122415245"></Item1>
    <Upload></Upload>
    <Dialog></Dialog>
  </div>
</template>
<script lang="ts" setup>
// 使用setup函数/setup语法糖 - 组件生命周期

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, provide } from 'vue';
import Item1 from './item1.vue'
import Dialog from '@/components/Dialog/index.vue'

// 依赖注入传值
provide('count', 666666)


// 组件传值
// props $emit 依赖注入(provide, inject) 事件总线($EventBus) 状态管理(VueX, Pinia)

// 父子组件生命周期
// 父组件 onBeforeMount => 子组件 onBeforeMount => 子组件 onMounted => 父组件 onMounted

onBeforeMount(() => {
  console.log('组合式API - 组件即将开始挂载');
  
})

onMounted(() => {
  console.log('组合式API - 组件挂载完成');
  
})

onBeforeUpdate(() => {
  console.log('组合式API - 组件更新之前');
})

onUpdated(() => {
  console.log('组合式API - 组件更新完成');
  
})

onBeforeUnmount(() => {
  console.log('组合式API - 组件卸载之前');

})

onUnmounted(() => {
  console.log('组合式API - 组件卸载完成');

})
</script>

<!-- <script lang="ts">
import order from '@/mixins/order'
  // 选项式API - 组件生命周期
  export default{
    mixins: [order],
    beforeCreate(){
      console.log('选项式API - 组件即将开始创建');

    },
    created(){
      console.log('选项式API - 组件创建完成');
      console.log(this.orderInfo);
      this.getOrder()
      
    },
    beforeMount(){
      console.log('选项式API - 组件即将开始挂载');
      
    },
    mounted(){
      console.log('选项式API - 组件挂载完成');
      
    },
    beforeUpdate(){
      console.log('选项式API - 组件更新之前');
      
    },
    updated(){
      console.log('选项式API - 组件更新完成');
      
    },
    beforeUnmount(){
      console.log('选项式API - 组件卸载之前');
      
    },
    unmounted(){
      console.log('选项式API - 组件卸载完成');
      
    },
  }
</script> -->