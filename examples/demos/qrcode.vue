<template>
  <section class="demo">
    <ic-flexbox vertical row="16">
      <h1 class="title">二维码</h1>
      <ic-flexbox-item>
        <ic-qrcode val="https://www.baidu.com/" :size="160"></ic-qrcode>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>
<style>
  .title {
    font-size: 20px;
  }
</style>
    
  