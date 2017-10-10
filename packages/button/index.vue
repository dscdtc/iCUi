<template>
  <button
  :class="[
    'ic-button',
    {
      'disabled': disabled,
      'loading': loading,
      'inline': inline,
      'ic-button-active': onclick
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
    data() {
      return {
        onclick: false
      }
    },
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
      }
    },
    methods: {
      clickOn () {
        this.onclick = true
        setTimeout(()=>(
          this.onclick = false
        ), 100)
      }
    },
    components: {
      loading
    }
  }
</script>