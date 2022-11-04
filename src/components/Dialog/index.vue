<template>
  <div class="child">
    <p>我是Dialog组件头部 {{ props.titleAppend}}</p>
    <slot :count="11">
      <p style="color: red;">我是插槽默认内容</p>
    </slot>
    <p>我是Dialog组件底部</p>
    <slot name="footerAppend" :count="199">
      <p style="color: blue;">我是插槽底部追加插槽</p>
    </slot>
  </div>
</template>
<script lang="ts" setup>

export interface Props {
  title: string
  titleAppend?: string,
  showFooter?: boolean | number | string | null | undefined
}

// 定义props
const props = withDefaults(defineProps<Props>(), {
  title: '提示',
});

// 定义事件
const emits = defineEmits<{
  (e: "submit", val: any): number,
  (e: "confirm", val: any): void,
  (e: "close"): void
}>( );

const closeDialog = () => {
  emits('close')
}
</script>