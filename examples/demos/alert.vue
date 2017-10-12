
<template>
  <section class="demo">
    <ic-flexbox row="250" col="250">
      <ic-flexbox-item>
        <ic-button @click="alert">原生iOS Alert</ic-button>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>
<style>
</style>
<script>
import { Alert ,Toast} from 'packages';

export default {
  methods: {
    alert () {
      Alert('欢迎使用icui', {
        title: '提示',
        btn: {
          text: '确定',
          style :{
            'color': '#47c9bc'
          },
        }
      })
      .then(()=>{
        Toast('你点击了确定',2000);
      })
    },
  }
};
</script>
  