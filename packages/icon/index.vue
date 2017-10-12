<template>
  <i :class="['ic-icon', 'ic-icon-' + name]" @click="$emit('click', $event)" />
</template>

<script>
export default {
  name: 'ic-icon',

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
