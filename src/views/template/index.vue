<template>
  <p>Vue模板应用</p>
  <div class="template-container">
    <div>
      <p>文本插值</p>
      <button @click="clickTemplatebtn">点击</button>
      <p>{{ state.content }}，我被点击了{{ state.count }} 次</p>
      <p>{{ content1 }}</p>
      <Item
        v-bind:name="state.name + '第一个字符串' + state.count + '第二个字符串'"
      ></Item>
      <Item
        :name="`${state.name1}第一个字符串${state.count}第二个字符串`"
        :isAdmin="true"
        :obj="{ label: '北京', value: 10 }"
      ></Item>
      <Item
        name="我是王二"
        :id="666666"
        is-admin
        :obj="state.objContent"
      ></Item>
      <Item :name="getName()" :id="88888"></Item>
    </div>

    <br />
    <br />
    <div>
      <p>指令</p>

      <button @click="updateP">切换显示</button>
      <p v-if="shwoLabel">变量1显示</p>
      <p v-else>变量2显示</p>
      <p v-if="shwoLabel">变量1显示</p>
      <p v-else-if="shwoLabel2">变量2显示</p>
      <p v-else>变量3显示</p>
      <p v-if="updateP2()">函数显示</p>
      <p v-show="shwoLabel">函数显示-shwo</p>

      <div>
        <input v-model="state.cityModel.label" />
        <input v-model="state.cityModel.value" />
        <button @click="addCity">添加城市</button>
        <button @click="delCity">删除城市</button>
      </div>
      <p v-for="(city, index) in state.cityList" :key="index">
        城市名称：{{ city.label }}，城市值：{{ city.value }}
      </p>

      <input v-model="state.modelVal" />
      <!-- <p v-for="city in state.cityList">
        城市名称：{{ city.label }}，城市值：{{ city.value }}
      </p> -->

      <VModel v-model="state.modelVal"></VModel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import Item from "./components/item.vue";
import VModel from "./components/vModel.vue";

const state = reactive({
  content: "我是文本插值",
  count: 0,
  name: "张三",
  name1: "李四",
  objContent: {
    label: "河南省",
    value: 41,
  },
  cityList: [
    { label: "北京市", value: 1 },
    { label: "上海市", value: 2 },
    { label: "重庆市", value: 3 },
    { label: "天津市", value: 4 },
  ],
  cityModel: {
    label: "",
    value: 0,
  },
  modelVal: 166,
});
const content1 = ref("我也是文本插值");
const shwoLabel = ref(true);
const shwoLabel2 = ref(true);

const clickTemplatebtn = () => {
  state.count++;
};

const getName = () => {
  return "小张";
};

const updateP = () => {
  shwoLabel.value = !shwoLabel.value;
  state.modelVal++;
};

const updateP2 = () => {
  return shwoLabel.value;
};

const addCity = () => {
  state.cityList.push(state.cityModel);
  state.cityModel = {
    label: "",
    value: 0,
  };
};

const delCity = () => {
  state.cityList.splice(state.cityList.length - 1, 1);
};
</script>
