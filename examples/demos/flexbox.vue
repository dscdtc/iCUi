<template>
  <section class="demo">
    <ic-flexbox class="flexbox" row="32">
      <ic-flexbox-item class="flex-item" span="1">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span="2">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span="3">Item </ic-flexbox-item>
    </ic-flexbox>
    <ic-flexbox class="flexbox" row="20" col="10">
      <ic-flexbox-item class="flex-item" span="1" offset="8">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span="2">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span="1">Item </ic-flexbox-item>
    </ic-flexbox>
    <ic-flexbox vertical row="10" col="6">
      <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>

<style>
  .flex-item {
    background-color: #ccc;
    border: solid red 1px
  }
</style>
