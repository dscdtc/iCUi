<template>
  <div
  class="ic-flexbox-item"
  :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-flexbox-item'
  export default {
    name: COMPONENT_NAME,
    data() {
      return {}
    },
    props: {
      span: {
        type: String,
        default: '1'
      },
      offset: {
        type: String,
        default: '0'
      }
    },
    computed: {
      style () {
        const row = Number(this.$parent.row)
        const col = Number(this.$parent.col)
        let left = Number(this.offset) + col/2
        return this.span || left || row || col
        ? {
          flex: this.span,
          margin: `${row/2}px ${col}px ${row/2}px ${left}px`
        }
        : {}
      }
    }
  }
</script>