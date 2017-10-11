<template>
  <div
  class="ic-flexbox"
  :class="{'vertical': vertical}"
  >
    <slot></slot>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-flexbox'
  export default {
    name: COMPONENT_NAME,
    data() {
      return {}
    },
    props: {
      vertical: {
        type: Boolean,
        default: false
      },
      col: {
        type: String,
        default: '0'
      },
      row: {
        type: String,
        default: '0'
      }
    }
  }
</script>