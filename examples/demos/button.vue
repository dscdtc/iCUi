<template>
  <section class="demo">
    <ic-flexbox vertical row="16" col="16">
      <ic-flexbox-item>
        <h1 class="title">按钮类型</h1>
      </ic-flexbox-item>
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

    <ic-flexbox row="32" col="16">
      <ic-flexbox-item>
        <ic-button inline :ripple="false">no ripple</ic-button>
        <ic-button inline>Inline Button</ic-button>
      </ic-flexbox-item>
    </ic-flexbox>
  </section>
</template>

<style>
  .title {
    font-size: 20px;
  }
</style>
