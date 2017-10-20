<template>
  <div class="ic-bubble" @click="show">
    <transition name="bubblefade">
      <div class="ic-bubble-mask" v-show="display" ></div>
    </transition>
    <transition name="bubblescale">
    <div
    :class="{'ic-bubble-content':!up, 'ic-bubble-content-down': up}"
    :style="pos"
    v-show="display"
    >
    <!--Can't write this way: :class="['ic-bubble-content', {'ic-bubble-content-down': up}]"> -->
      <div :class="['ic-bubble-arrow', {'ic-bubble-arrow-down': up}]"></div>
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
    data () {
      return {
        display: false
      }
    },
    props: {
      pos: {
        type: String,
        default: "top:0;right:0;"
      },
      up: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      show () {
        this.display = !this.display
      }
    }
  }
</script>
