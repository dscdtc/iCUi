<template>
  <i :class="['ic-icon', 'ic-icon-' + name]" @click="$emit('click', $event)" />
</template>

<script>
const COMPONENT_NAME = 'ic-icon'
export default {
  name:COMPONENT_NAME,
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
