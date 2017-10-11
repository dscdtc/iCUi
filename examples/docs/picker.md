## Button 按钮

### 使用指南
``` javascript
import { Picker } from 'icui';

Vue.component(Picker.name, Picker);
```

### 代码演示
:::demo
```html
<picker @select="handleSelect(1,arguments)" :data="data"
        ref="picker1" :title="title" :cancelTxt="cancelTxt":confirmTxt="confirmTxt">
</picker>
```
```js
export default {
    data() {
      return {
        data: [
          [['aaa','bbb'], ['ccc','ddd'], ['eee','fff']]
        ],
        title: [
          '三列选择器'
        ],
        selectedText:[
          '三列选择器'
        ]
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
        console(`您选中${args[2]}`)
      }
    }
  }
```
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| handleSelect | 选中之后派发的事件 | `Function` |  |
| cancelTxt | 取消选择 | `String` |  |
| confirmTxt | 确认选择 | `Boolean` |  |
| data | Picker数据 | `Array` |  |
