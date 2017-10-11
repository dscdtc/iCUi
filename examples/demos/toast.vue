<template>
  <section class="demo-toast">
    <ic-flexbox>
      <ic-button @click="showToast">Toast 轻提示</ic-button>
    </ic-flexbox>
  </section>
</template>
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
  