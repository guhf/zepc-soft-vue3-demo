<template>
  <main>
    <p>响应式编程和组合式API</p>
    <UserList ref="userListRef" :color="color" />
  </main>
</template>
<script setup lang="ts">
import {
  reactive,
  ref,
  onMounted,
  onUnmounted,
  onUpdated,
  watch,
  watchEffect,
  computed,
} from "vue";
import UserList from "../components/composition/userList.vue";

const state = reactive({
  id: 0,
  tableData: [],
  msg: "",
});

const count = ref(100);
const myCount = ref(222);
const otherCount = ref(300);
const welcomeRef = ref(null);

// 初始化数据/请求网络接口
onMounted(() => {});

// 组件内响应式状态发生变化，重新渲染DOM
onUpdated(() => {});

// 销毁定时器/watch监听/切断长连接等
onUnmounted(() => {});

watch(
  () => state.msg,
  (val: string, oldVal: string) => {}
);

watch(count, (val: number, oldVal: number) => {});

watch(
  [count, myCount, otherCount],
  (
    [countVal, myVal, otherVal]: number[],
    [countOldVal, myOldVal, otherOldVal]: number[]
  ) => {}
);

watchEffect(() => console.log(4444, count.value));

const color = computed(() => {
  let val = "";
  if (count.value === 100) {
    val = "#ffffff";
  } else if (myCount.value === 200) {
    val = "#ff0000";
  } else if (otherCount.value === 300) {
    val = "#ffff00";
  }

  return val;
});
</script>
