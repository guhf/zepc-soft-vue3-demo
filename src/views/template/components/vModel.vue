<template>
  <p>自定义v-model</p>
  <div class="template-v-model-container">
    <button @click="updateModelValue">组件内改变model绑定值</button>
    <div>自定义v-model绑定值{{ modelValue }}</div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

export interface Props {
  modelValue: number;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 1111,
});

const emits = defineEmits<{
  (e: "update:modelValue", val: number): void;
}>();

const updateModelValue = () => {
  let val = Math.floor(Math.random() * 10000);
  emits("update:modelValue", val);
};

// watch(
//   () => props.modelValue,
//   () => {
//     value.value = props.modelValue;
//   }
// );
</script>
