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
<ic-flexbox class="flexbox" row="32">
  <ic-flexbox-item class="flex-item" span="1">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span="2">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span="3">Item </ic-flexbox-item>
</ic-flexbox>
<ic-flexbox class="flexbox" row="20" col="10">
  <ic-flexbox-item class="flex-item" span="1" offset="8">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span="2">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item" span="1">Item </ic-flexbox-item>
</ic-flexbox>
<ic-flexbox vertical row="10" col="6">
  <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">Item</ic-flexbox-item>
</ic-flexbox>
```
:::

### Options

#### `<ic-flexbox>`
| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| vertical | 垂直布局 | `Boolean` | false |
| row | 行间距(单位：px) | `String` | '0' |
| col | 列间距(单位：px) | `String` | '0' |

#### `<ic-flexbox-item>`
| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| vertical | 垂直布局 | `Boolean` | false |
| span | 宽度比例 | `String` | '' |
| offset | 偏移量(单位：px) | `String` | '0' |
