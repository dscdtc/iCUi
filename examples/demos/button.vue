<template>
  <section class="demo-button">
    <h2>按钮类型：</h2>
    <ic-button>Primary Button</ic-button>
    <ic-button loading>Loading</ic-button>
    <ic-button disabled>Disabled</ic-button>
    <ic-button inline>Inline Button</ic-button>
    <ic-button inline>Inline Button</ic-button>
  </section>
</template>
<script>
export default {
    data (){
        return {}
    }
}
</script>
<style>
  .demo-button > * {
    margin: 32px 0;
  }
</style>