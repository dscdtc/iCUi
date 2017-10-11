
<template>
  <div class="demo-container">
      <h1 class="title">Radio 单选框</h1>
      <span>基础用法</span>
      <ic-radio name="1" v-model="radio1">单选框1</ic-radio>
      <ic-radio name="2" v-model="radio1">单选框2</ic-radio>
      <ic-radio name="3" v-model="radio1">单选框3</ic-radio>
      <br/>
      <br/>
      <span>禁用状态</span>
      <ic-radio name="1" v-model="radio2" :isDisabled="true">禁止选中</ic-radio>
      <ic-radio name="2" v-model="radio2" :isDisabled="true">禁止取消选中</ic-radio>
  </div>
   
</template>
<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2'
    };
  }
};
</script>
<style>
  .demo-container{
    padding:10px;
  }
  .title {
    font-size: 20px;
    font-weight: blod;
  }
</style>
  