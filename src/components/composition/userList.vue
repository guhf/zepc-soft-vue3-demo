<template>
  <p :style="{ color: color }">用户列表</p>
  <div class="container">
    <div class="content">
      <input type="radio" :value="-1" v-model="sexFliter" />全部
      <input type="radio" :value="0" v-model="sexFliter" />男
      <input type="radio" :value="1" v-model="sexFliter" />女
    </div>
    <div class="content">
      搜索：
      <input type="text" v-model="searchKey" />
    </div>
    <div class="content">
      <table border="1" width="300px">
        <tr>
          <th>姓名</th>
          <th>性别</th>
        </tr>
        <tr v-for="(data, index) in state.userListData" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.sex == 0 ? "男" : "女" }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref, watch } from "vue";

// 定义组件Pros 二
export interface Props {
  color: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "",
});

// 定义组件回调函数
defineEmits<{
  (e: "change", id: number, data: Array<any>): void;
  (e: "update", value: string, data: any[]): void;
}>();

interface userInfo {
  name: string;
  sex: number;
}

const state = reactive({
  msg: "666666666",
  userListData: [] as userInfo[],
});
let sexFliter = ref(-1);
let searchKey = ref("");

const mockData = [
  {
    name: "小王",
    sex: 0,
  },
  {
    name: "小红",
    sex: 1,
  },
  {
    name: "小李",
    sex: 1,
  },
  {
    name: "小张",
    sex: 0,
  },
] as userInfo[];

// 初始化数据/请求网络接口
onMounted(() => {
  setTimeout(() => {
    getData();
  }, 3000);
});

// 组件内响应式状态发生变化，重新渲染DOM
onUpdated(() => {});

// 销毁定时器/watch监听/切断长连接等
onUnmounted(() => {});

const getData = () => {
  state.userListData = mockData;
  console.log(state.userListData);
};

const filterData = () => {
  if (sexFliter.value === -1) {
    state.userListData = mockData;
    return;
  }
  state.userListData = mockData.filter((item) => {
    return item.sex === sexFliter.value;
  });
};

const searchData = () => {
  state.userListData = mockData.filter((item) => {
    return item.name.search(searchKey.value) != -1;
  });
};

watch(
  () => sexFliter.value,
  (val: number, oldVal: number) => {
    filterData();
  }
);

watch(
  () => searchKey.value,
  (val: string, oldVal: string) => {
    searchData();
  }
);
</script>
