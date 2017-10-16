<template>
        <div class="ic-cell">
            <div class="ic-cell__hd">
                 <label class="ic-label" :style="{width: labelWidth + 'em'}" v-if="title">{{title}}</label>
            </div>
            <div class="ic_cell_bd ic_cell_primary">
               <input class="ic_input"
                  ref="input"
                  v-if="type === 'text'"
                  :maxlength="max"
                  :placeholder="placeholder"
                  type="text"
                  v-model="currentValue"
               />
            </div>
            <div class="ic-cell__ft">
              <icon name="del"
               @click.native="clear"
               v-show="showClear && currentValue"
              ></icon>
            </div>
        </div>
</template>
<script>
  import Icon from '../icon'
  import { debounce } from '../utils'
  const COMPONENT_NAME = 'ic-input'
  export default {
    name :COMPONENT_NAME,
    data () {
      return {
        currentValue: ''
      }
    },
    props :{
      title :{
        type: String,
        default: ''
      },
      // 节流
      debounce: Number,
      type: {
        type: String,
        default: 'text'
      },
      showClear: {
        type: Boolean,
        default: true
      },
      placeholder: String,
      max: Number
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
    methods :{
      clear(){
        this.currentValue = ''
        this.focus()
      },
      focus () {
        this.$refs.input.focus()
      },
    },
    computed: {
      labelWidth() {
        return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
      },
    },
    components :{
      Icon
    }
  }
</script>
<style>

</style>
