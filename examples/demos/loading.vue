<template>
  <section class="demo-loading">
    <ic-flexbox vertical row="16">
      <ic-flexbox-item>
        <h1 class="title">iOS Loading</h1>
      </ic-flexbox-item>
      <ic-flexbox-item>
        <h2 class="text">20px</h2>
        <ic-loading :size="20"></ic-loading>
      </ic-flexbox-item>
      <ic-flexbox-item>
        <h2 class="text">40px</h2>
        <ic-loading :size="40"></ic-loading>
      </ic-flexbox-item>
      <ic-flexbox-item>
        <h2 class="text">60px</h2>
        <ic-loading :size="60"></ic-loading>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>
<style>
  .title {
    font-size: 20px;
    font-weight: blod;
  }
</style>
