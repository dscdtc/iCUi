<template>
  <button
  :class="[
    'ic-button',
    {
      'disabled': disabled,
      'loading': loading,
      'ripple': !disabled && !loading && ripple,
      'inline': inline
    }
  ]"
  @click="clickOn"
  >
    <loading v-if="loading"></loading>
    <slot></slot>
  </button>
</template>

<script>
  import loading from '../loading'
  const COMPONENT_NAME = 'ic-button'
  export default {
    name: COMPONENT_NAME,
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      ripple: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      clickOn () {
        if (!this.loading && !this.disabled) {
          this.$emit('click')
        }
      }
    },
    components: {
      loading
    }
  }
</script>