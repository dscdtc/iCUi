<template>
  <div class="ic-bubble">
    <transition name="fade">
    <div @click="display=!display" v-show="display" class="ic-bubble-mask"></div>
    </transition>
    <transition name="scale">
    <div class="ic-bubble-content" :style="pos">
      <div class="ic-bubble-arrow"></div>
      <ul class="ic-bubble-list">
        <slot></slot>
      </ul>
    </div>
    </transition>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-bubble'
  export default {
    name: COMPONENT_NAME,
    props: {
      pos: {
        type: String,
        default: ""
      },
      colmn: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
