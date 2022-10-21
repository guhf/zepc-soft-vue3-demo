<template>
  <div>
    <p>第一个根节点</p>
    <p>{{ count }}</p>
    <Item1></Item1>
    <Upload></Upload>
  </div>
  <div>
    <p>第二个根节点</p>
    <p>{{ state.code }}</p>
    <Dialog class="father" :title-append="state.code" :show-footer="true" />
    <Dialog titleAppend="12312" show-footer >
      <template #footerAppend="footerProp">
        <p>插槽传递的内容6666{{count}},作用域插槽内容{{footerProp.count}}</p>
      </template>
    </Dialog>
    <Dialog :show-footer="undefined" v-slot="count">
      <p>1插槽传递的内容{{state.code}},作用域插槽内容{{count}}</p>

      <!-- <template v-slot:footerAppend>
        <p>插槽传递的内容2{{count}}</p>
      </template> -->
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

import Item1 from './item1.vue'
import Dialog from '@/components/Dialog/index.vue'
// import Dialog from '../../components/Dialog/index.vue'

const state = reactive({
  id: 0,
  code: '202210210001'
})
const count = ref(100)

count.value++

</script>

<!-- <script lang="ts">
  import { reactive } from 'vue';
  import Item1 from './item1.vue'
  export default{
    components: {Item1}
    setup(){

      const state = reactive({
        id: 0,
        code: '202210210001'
      })

      return{
        state
      }
    }
  }
</script> -->

<style lang="scss">
</style>
<style>
</style>
<style>
</style>
<style>
</style>
<style>
</style>