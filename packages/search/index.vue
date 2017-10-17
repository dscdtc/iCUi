<template>
    <div class="ic-search-bar">
        <form class="ic-search__form" action=".">
            <div class="ic-search-bar__box">
                <ic-icon name="search" class="ic-icon-search"></ic-icon>
                <input type="search" class="ic-search-bar__input" 
                  v-model="currentValue"
                  ref="input"
                  @focus="onFocus"
                  :placeholder="placeholder"
                />
                <ic-icon name="del" class="ic-icon-clear"
                  v-show="currentValue"
                  @click="clear" 
                ></ic-icon>
            </div>
        </form>
        <div class="ic-search-bar__cancel-btn"
          v-show="isCancel"
          @click="cancel">取消
        </div>
      
    </div>
</template>

<script>
  const COMPONENT_NAME = 'ic-search'
  import { debounce } from '../utils'
  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        currentValue: '',
        isCancel: false,
        isFocus: false,
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: String,
      debounce: Number,
    },
    created() {
      // 节流
      if(this.debounce) {
            this.$watch('currentValue', debounce((newQuery) => {
            this.$emit('change', newQuery)
          }, this.debounce))
      }else {
        this.$emit('change', this.currentValue)
      }
      
    },
    methods: {
      clear() {
        this.currentValue = ''
        this.focus()
      },
      cancel () {
        this.isCancel = false
        this.currentValue = ''
        this.$emit('on-cancel')
      },
      focus () {
        this.$refs.input.focus()
      },
      onFocus () {
        this.isCancel = true
        this.isFocus = true
        this.$emit('on-focus')
      },
      setFocus () {
        this.$refs.input.focus()
      },
      setBlur () {
        this.$refs.input.blur()
        this.$emit('on-blur')
      },
    }
  }
</script>
