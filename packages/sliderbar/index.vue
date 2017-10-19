<template>
  <div class="ic-sliderbar">
    <div class="sliderbar-rail"></div>
    <div class="sliderbar-track"></div>
    <div class="sliderbar-handle"></div>
    <div class="sliderbar-mark"></div>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-sliderbar'
  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        currentValue: '',
        isCancel: false,
        isFocus: false,
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>
