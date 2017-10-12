## Flexbox 布局

### 使用指南
``` javascript
import { Flexbox, FlexboxItem } from 'icui';

Vue.component(Flexbox.name, Flexbox);
Vue.component(FlexboxItem.name, FlexboxItem);
```

### 代码演示
:::demo
```html
`span` 控制元素宽度占比 比如1:2:3：
<ic-flexbox>
  <ic-flexbox-item class="flex-item" span=1>Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span=2>Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span=3>Item </ic-flexbox-item>
</ic-flexbox>

`row` `col`设置子元素之间行间距列间距(单位：px)
`offset`设置元素左侧偏移量(单位：px)
<ic-flexbox row=20 col=10>
  <ic-flexbox-item class="flex-item" span=1 offset=32>Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span=2>Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span=1>Item </ic-flexbox-item>
</ic-flexbox>

`vertical`设置为垂直布局
<ic-flexbox vertical row=10 col=6>
  <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>      <ic-flexbox-item class="flex-item-vertical" vertical>
    <div>Item1</div>
    <div>Item2</div>
    <div>Item3</div>
  </ic-flexbox-item>
</ic-flexbox>

<style>
  .flex-item {
    height: 30px;
    line-height: 30px;
    background-color: #ccc;
    border: solid red 1px
  }
  .flex-item-vertical {
    background-color: #ccc;
    border: solid red 1px
  }
</style>
```
:::

### Options

#### `<ic-flexbox>`
| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| vertical | 垂直布局 | `Boolean` | false |
| row | 行间距(单位：px) | `Number` | 0 |
| col | 列间距(单位：px) | `Number` | 0 |

#### `<ic-flexbox-item>`
| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| vertical | 垂直布局 | `Boolean` | false |
| span | 宽度比例 | `Number` | 1 |
| offset | 偏移量(单位：px) | `Number` | 0 |
