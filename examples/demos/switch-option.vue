<template>
  <section class="demo">
    <ic-flexbox vertical row="32">
      <h1 class="title">switch 滑动开关</h1>
      <ic-flexbox-item>
        <ic-switch :name="On" :value="true"></ic-switch>
      </ic-flexbox-item>
      <ic-flexbox-item>
        <ic-switch :name="Off" :value="false"></ic-switch>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
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
  .title {
    font-size: 20px;
    font-weight: blod;
  }
</style>
    
  