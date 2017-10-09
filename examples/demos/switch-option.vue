<template>
  <div class="demo-container">
    <p>switch 滑动开关</p>
    <ic-switch :name="On" :value="true"></ic-switch>
    <ic-switch :name="Off" :value="false"></ic-switch>
  </div>
</template>
<script>
export default {
    data (){
        return {
            On:'On',
            Off:'Off'
        }
    }
}
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
    
  