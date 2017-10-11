<template>
    <div slot="content">
       <ic-flexbox>
        <ic-flexbox-item>
          Picker 选择器
        </ic-flexbox-item>
      </ic-flexbox>
      <ic-button @click="showPicker(0)" ref="select0">{{ selectedText[0] }}</ic-button>
      <br/>
      <ic-picker @select="handleSelect(0,arguments)" :selected-index="selectedIndex[0]"
              ref="picker0" :title="title[0]"></ic-picker>

      <ic-button @click="showPicker(1)" ref="select1">{{ selectedText[1] }}</ic-button>
      <br/>
      <ic-picker @select="handleSelect(1,arguments)" :data="data[1]" :selected-index="selectedIndex[1]"
              ref="picker1" :title="title[1]" :cancelTxt="cancelTxt"
              :confirmTxt="confirmTxt"></ic-picker>

      <ic-button @click="showPicker(2)" ref="select2">{{ selectedText[2] }}</ic-button>
      <br/>
      <ic-picker @select="handleSelect(2,arguments)" :data="data[2]" :selected-index="selectedIndex[2]"
              ref="picker2" :title="title[2]"></ic-picker>
    </div>
</template>

<script>


  let data1 = [
    {
      text: '恩恩',
      value: 1
    }, {
      text: '哦哦',
      value: 2
    },
    {
      text: '啦啦',
      value: 3
    },
    {
      text: '啊啊',
      value: 4
    },
  ]

  let data2 = [
    {
      text: '老虎',
      value: 'a'
    }, {
      text: '狮子',
      value: 'b'
    },
    {
      text: '大象',
      value: 'c'
    }
  ]

  let data3 = [
    {
      text: '阅读',
      value: 1
    }, {
      text: '看书',
      value: 2
    },
    {
      text: '写字',
      value: 3
    }
  ]

  export default {
    mounted() {
      this.$refs.picker0.setData([data1])
      this.$refs.picker0.setSelectedIndex([1])
    },
    data() {
      return {
        data: [
          [data1],
          [data1, data2],
          [data1, data2, data3],
        ],
        selectedIndex: [
          [0],
          [1, 0],
          [0, 1, 2],
          [0, 0, 0]
        ],
        selectedText: [
          '单列选择器示例',
          '两列选择器示例',
          '三列选择器示例',
          '联动选择器示例'
        ],
        title: [
          '单列选择器',
          '两列选择器',
          '三列选择器',
          '联动选择器'
        ],
        cancelTxt: '关闭',
        confirmTxt: '好的'
      }
    },
    methods: {
      showPicker(index) {
        let picker = this.$refs['picker' + index]

        picker.show()
      },
      handleSelect(index, args) {
        this.selectedText.splice(index, 1, args[2].join(','))
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .select
      margin: 0 10px 40px 10px
      height: 40px
      line-height: 40px
      text-align: center
      background: #fff

</style>
