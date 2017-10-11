<template>
  <section class="demo">
    <ic-flexbox vertical>
      <h1>按钮类型</h1>
      <ic-flexbox-item>
        <ic-button>Primary Button</ic-button>
      </ic-flexbox-item>
      <ic-flexbox-item>
        <ic-button loading>Loading</ic-button>
      </ic-flexbox-item>
      <ic-flexbox-item>
        <ic-button disabled>Disabled</ic-button>
      </ic-flexbox-item>
    </ic-flexbox>

    <ic-flexbox>
      <ic-flexbox-item>
        <ic-button inline :ripple="false">no ripple</ic-button>
        <ic-button inline>Inline Button</ic-button>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>

<style>
  .demo-button > * {
    margin: 16px 0;
  }
</style>