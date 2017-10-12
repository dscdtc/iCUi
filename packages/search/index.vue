<template>
  <div class="search">
    <!-- <i @click="back" class="icon icon-back" /> -->
    <input class="input" :placeholder="this.placeholder" autofocus required />
    <!-- <i @click="clear" class="icon-clear" />
    <i @click="click" class="icon icon-search" /> -->
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-search'
  export default {
    name: COMPONENT_NAME,
    props: {
      placeholder: {
        type: String,
        default:'搜索'
      }
    }
  }
</script>
