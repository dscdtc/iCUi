<template>
  <div class="zan-doc-header">
    <div class="zan-doc-header__top">
      <a class="zan-doc-header__logo"></a>
      <div class="zan-doc-header__title">icui使用文档</div>
      <ul class="zan-doc-header__top-nav">
        <li v-for="(value, key) in nav">
          <a :href="value" :class="{ active: key === active }">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zan-doc-header',

  props: {
    nav: Object,
    active: String
  }
};
</script>

<style lang="postcss">
@import '../style/variable.css';

.zan-doc-header {
  width: 100%;

  &__top {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 $zan-doc-padding;
    height: $zan-doc-header-top-height;
    line-height: $zan-doc-header-top-height;
    box-shadow: 0 1px 4px rgba(0,0,0,.1);

    &-nav {
      flex: 1;
      text-align: right;

      li {
        display: inline-block;
      }

      a {
        margin: 0 20px;
        font-size: 15px;
        display: block;
        color: $zan-doc-text-color;

        &:hover,
        &.active {
          color: $zan-doc-blue;
        }
      }
    }
  }

  &__logo {
    display: block;
    width: 60px;
    height: 60px;
    background-image: url(http://oetr5vzir.bkt.clouddn.com/WX20171005-094729@2x.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__title {
    font-size: 20px;
    color: #313131;
    margin-left:30px;
  }

  &__bottom {
    height: $zan-doc-header-bottom-height;
    line-height: $zan-doc-header-bottom-height;

    &-nav {
      text-align: center;

      li {
        display: inline-block;
      }

      a {
        color: #fff;
        opacity: .8;
        display: block;
        padding: 0 20px;
        font-size: 14px;

        &.active {
          background-color: rgba(255, 255, 255, .1);
        }

        &:hover,
        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
