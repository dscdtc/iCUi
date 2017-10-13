<template>
    <form class="ic-search" action="#">
      <div :class="{'search-unactive': !isFocus, 'search-active': isFocus}" @click="isFocus = true">
        <ic-icon name="search" class="search-icon"></ic-icon>
        <span v-show="!isFocus">{{mark}}</span>
      </div>
      <input
        v-show="isFocus"
        class="search-input"
        v-model="searchValue"
        :placeholder="this.placeholder"
        :autofocus="autofocus"
        @focus="isFocus = true"
        required
      />
      <ic-icon name="del" class="search-icon search-icon-clear" @click="clear"></ic-icon>
      <transition name="search-slide">
        <span class="search-search" v-show="searchValue" @click="search">查询</span>
      </transition>
      <transition name="search-slide">
        <span v-if="isFocus" v-show="!searchValue" @click="isFocus = false" class="search-cancel">取消</span>
      </transition>
    </form>
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
      placeholder: {
        type: String,
        default:'搜索'
      },
      mark: {
        type: String,
        default: '点击搜索'
      },
    },
    methods: {
      search () {
        if (this.searchValue) {
          this.$emit('search', this.searchValue)
        }
      },
      clear () {
        this.searchValue = ''
      }
    }
  }
</script>
