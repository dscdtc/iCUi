<template>
  <section class="demo">
    <ic-flexbox>
      <ic-flexbox-item class="flex-item" span=1>Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span=2>Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span=3>Item </ic-flexbox-item>
    </ic-flexbox>
    <ic-flexbox row=20 col=10>
      <ic-flexbox-item class="flex-item" span=1 offset=32>Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span=2>Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item" span=1>Item </ic-flexbox-item>
    </ic-flexbox>
    <ic-flexbox vertical row=10 col=6>
      <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
      <ic-flexbox-item class="flex-item-vertical" vertical>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>

<style>
  .flex-item {
    height: 30px;
    line-height: 30px;
    background-color: #ccc;
    border: solid red 1px
  }
  .flex-item-vertical {
    background-color: #ccc;
    border: solid red 1px
  }
</style>
