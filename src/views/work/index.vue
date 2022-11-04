<template>
  <div class="work_wrap">
    <p class="work_title">作业展示</p>
    <div class="work_content">

    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';

const workFiles = import.meta.glob('../../../homework/register - 20221028/*.vue')

console.log(111, workFiles);

onMounted(() => {
  Object.keys(workFiles).forEach((key) => {
    console.log(key);
    console.log(workFiles[key]);
    
    
    // if (typeof workFiles[key].default === 'function') {
    //   if (key !== './index.ts') workFiles[key].default(app)
    // }
  })
})

</script>

<style lang="scss">
.work_wrap{
  display: flex;
  flex-direction: column;
  align-items: center;

  .work_title{
    font-size: 18px;
    color: #333333;

  }
}
</style>