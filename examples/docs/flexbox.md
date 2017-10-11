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
<ic-flexbox class="flexbox">
  <div class="other-el">其他元素</div>
  <ic-flexbox-item class="flex-item">12345</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">上山打老虎</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">老虎没打到 打到小松鼠</ic-flexbox-item>
</ic-flexbox>
<ic-flexbox vertical>
  <ic-flexbox-item class="flex-item">12345</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">上山打老虎</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">老虎没打到</ic-flexbox-item>
  <ic-flexbox-item class="flex-item">打到小松鼠</ic-flexbox-item>
</ic-flexbox>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| vertical | 垂直布局 | `Boolean` | false |
