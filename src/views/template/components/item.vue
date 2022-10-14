<template>
  <p>Vue模板应用子组件</p>
  <div class="template-container">
    <div>我是子组件属性值id：{{ props.id }}</div>
    <div>我是子组件属性值name：{{ props.name }}</div>
    <div>我是子组件属性值isAmin：{{ props.isAdmin ? "true" : "false" }}</div>
    <div>
      我是子组件属性值obj：label{{ props.obj?.label }},value{{
        props.obj?.value
      }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";

export interface Obj {
  label: string;
  value: number;
}

export interface Props {
  id: number;
  name: string;
  isAdmin?: boolean;
  obj?: Obj;
}

const props = withDefaults(defineProps<Props>(), {
  id: 12123,
  name: "",
});

const state = reactive({
  content: "我是文本插值",
  count: 0,
});
</script>
