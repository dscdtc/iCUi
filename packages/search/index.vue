<template>
  <transition name="search-slide">
    <form class="ic-search">
      <span class="search-container">
        <i @click="back" class="search-icon ic-icon-back">返</i>
        <input
        class="search-input"
        v-model="searchValue"
        :placeholder="this.placeholder"
        :autofocus="autofocus"
        required
        @focus="isFocus = true"
        />
        <i @click="clear" class="search-icon-clear">清</i>
      </span>
      <i v-show="searchValue" @click="search" class="search-icon icon-search">搜</i>
      <span v-if="isFocus || autofocus" v-show="!searchValue" @click="isFocus = false" class="search-cancel">取消</span>
    </form>
  </transition>
</template>

<script>
  const COMPONENT_NAME = 'ic-search'
  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        searchValue: '',
        isFocus: false
      }
    },
    props: {
      placeholder: {
        type: String,
        default:'搜索'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      back () {
        this.$router.back()
      },
      search () {
        if (this.searchValue) {
          this.$emit('search', this.searchValue)
        }
      },
      clear () {
        this.searchValue = ''
        this.isFocus = false
      }
    }
  }
</script>
