<template>
        <div class="ic-cell">
            <div class="ic-cell__hd">
                 <label class="ic-label" :style="{width: labelWidth + 'em'}" v-if="title">{{title}}</label>
            </div>
            <div class="ic_cell_bd ic_cell_primary">
               <input class="ic_input" 
               :placeholder="placeholder"
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
      showClear: {
        type: Boolean,
        default: true
      },
      placeholder: String,
    },
    watch:{

    },
    methods :{
      clear(){
        this.currentValue = ''
        this.focus()
      }
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
