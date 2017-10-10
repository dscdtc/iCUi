
<template>
    <div class="demo-container">
       <p>Radio 单选框</p>
       <span>基础用法</span>
       <ic-radio name="1" v-model="radio1">单选框1</ic-radio>
       <ic-radio name="2" v-model="radio1">单选框2</ic-radio>
       <ic-radio name="3" v-model="radio1">单选框3</ic-radio>
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
  padding:20px;
  p{
    text-align:center;
    font-size:20px;
    margin-bottom:20px;
  }
}
</style>
  