<template>
  <section class="demo-flexbox">
    <ic-flexbox class="flexbox">
      <div class="other-el">其他元素</div>
      <ic-flexbox-item class="flex-item">12345</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">上山打老虎</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">老虎没打到 打到小松鼠</ic-flexbox-item>
    </ic-flexbox>
    <ic-flexbox vertical>
      <ic-flexbox-item class="flex-item">12345</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">上山打老虎</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">老虎没打到</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">打到小松鼠</ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>

<style>
  .flexbox {
    background-color: #66ccff
  }
  .other-el {
    background-color: grey
  }
  .flex-item {
    background-color: yellowgreen
  }
</style>
