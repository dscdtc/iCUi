<template>
  <div class="ic-bubble">
    <div class="ic-bubble-mask"></div>
    <div class="ic-bubble-content">
      <div class="ic-bubble-arrow"></div>
      <ul class="ic-bubble-list">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-bubble'
  export default {
    name: COMPONENT_NAME,
  }
</script>
