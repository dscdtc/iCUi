<template>
  <section class="demo-toast">
      <ic-button @click="showToast">Toast 轻提示</ic-button>
  </section>
</template>
<style>
  .demo-toast {
    padding: 20px;
  }
</style>
<script>
import { Toast } from 'packages';

export default {
  methods: {
    showToast() {
      Toast('this is a toast',2000);
    }
  }
};
</script>
  