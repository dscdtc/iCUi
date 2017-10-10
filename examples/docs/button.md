## Switch 滑动开关

### 使用指南
``` javascript
import { Button } from 'icui';

Vue.component(Button.name, Button);
```

### 代码演示

#### 

:::demo
```html
<ic-button :value="false" :name="name"></ic-button>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| value | 开关状态 | `Boolean` | false|
| name | switch 的 name | `String` | ''|
