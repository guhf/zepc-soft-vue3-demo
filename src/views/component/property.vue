<template>
  <div>
    <button @click="function1">增加1</button>
    <button @click="function2">减少1</button>
    <button @click="changeWatchData1">更改侦听器1</button>
    

    <p>方法输出结果：{{ functionPrint() }}</p>
    <p>计算属性1输出结果：{{ computed1 }}</p>
    <p>计算属性2输出结果：{{ computed2 }}</p>
    <p>计算属性3输出结果：{{ computed3 }}</p>
    <p>侦听器1输出结果：{{ watchData.result1 }}</p>
    <p>侦听器2输出结果：{{ watchData.result2 }}</p>
    <p>侦听器3输出结果：{{ watchData.result3 }}</p>




     <form class="form">
      <div class="form-item">
        <label>用户名</label>
        <input type="text" v-model.trim="state.userName" placeholder="请输入用户名" />
      </div>
      <div class="form-item">
        <label>密码</label>
        <input type="password" v-model="state.password" placeholder="请输入密码" />
      </div>
      <div class="form-item" :class="cricleClass">
        <label>邮件</label>
        <input type="text" v-model.lazy="state.email" placeholder="请输入邮件" />
      </div>
      <div class="form-item">
        <label>性别1</label>
        <input type="radio" v-model="state.sex" :value="1" />男
        <input type="radio" v-model="state.sex" :value="0" />女
      </div>
      <div class="form-item">
        <label>性别2</label>
        <select v-model="state.sex">
          <option :value="1">男</option>
          <option :value="0">女</option>
        </select>
      </div>
      <div class="form-item">
        <label>特长</label>
        <input type="checkbox" v-model="state.specialty" value="篮球" />篮球
        <input type="checkbox" v-model="state.specialty" value="足球" />足球
        <input type="checkbox" v-model="state.specialty" value="排球" />排球
        <input type="checkbox" v-model="state.specialty" value="棒球" />棒球
      </div>
      <div class="form-item" :class="{cricle: state.cricle, cricle2: state.cricle, cricle3: state.cricle }">
        <label>备注</label>
        <textarea type="text" v-model="state.remark" placeholder="请输入备注" />
      </div>
     </form>
     <div class="submit">
      <button type="button" @click="changeRadius">圆角/直角</button>
      <button type="button" style="background-color:blue" :style="{width: `${state.btnHeight}px`}" @click="register">注册</button>
     </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue';

// 定义变量/对象

const state = reactive({
  userName: '',
  password: '',
  email: '',
  sex: 0,
  specialty: ['足球', '棒球'],
  remark: '',
  cricle: true,
  btnHeight: 40,
})

const cricleClass = reactive({
  cricle: state.cricle, 
})

const data = reactive({
  number: 122,
  code: ''
})

let count = ref(0)

let number1 = 20
let number2 = 30

// 定义函数
const function1 = () => {
  console.log(1111);
  count.value ++
  number1 ++
}

function function2(){
  console.log(2222);
  
  count.value --
}

const functionPrint = () => {
  return data.number + count.value
}

const changeRadius = () => {
  state.cricle = !state.cricle
  state.btnHeight ++
}

const register = () => {
  alert(JSON.stringify(state))
}

// 定义计算属性
const computed1 = computed(() => {
  return data.number + count.value
})

const computed2 = computed(() => {
  return number1 + number2
})

const firstName = ref('John')
const lastName = ref('Doe')

const computed3 = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

// 定义侦听器
const watchData = reactive({
  num1: 111,
  num2: 222,
  result1: 0,
  result2: 0,
  result3: 0,
})

let count1 = ref(100)

const changeWatchData1 = () => {
  count1.value ++
  watchData.num1 ++
}

watch(count1, () => {
  watchData.result1 = 6666
})

watch(() => watchData.num1, (newValue, oldValue) => {
  console.log( `newValue:${newValue}oldValue:${oldValue}`);

  watchData.result2 = 8888
})

watch([() => watchData.num1, () => watchData.num2], (newValue, oldValue) => {
  watchData.result3 = 9999
})


</script>

<style lang="scss">
  .form{
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    .form-item{
      line-height: 50px;
      // padding: 10px 0;

      label{
        margin-right: 10px;
      }

      input{
        height: 100%;
      }
    }

    .cricle{
      input, textarea{
        border-radius: 50%;
      }
    }
  }
</style>