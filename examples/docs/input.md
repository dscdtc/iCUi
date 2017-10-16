## Input 输入

### 使用指南
``` javascript
import { Input } from 'icui';

Vue.component(Input.name, Input);
```

### 代码演示

#### 基础用法


:::demo 基础用法
```html
 <ic-input
    title="节流"
    placeholder="I'm placeholder"
    :debounce="200"
    :type="'text'"
    @change="change"
>
</ic-input>
```



:::

### Options

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String`  | `''` | - |
| placeholder | placeholder | `String`  | `''` | -  |
| debounce | 节流时间 | `Number`  | `''` | - |
| max | 最多输入限制 | `Number`  | `` | - |
| change | onChange派发时间 | `Function`  | `` | - |
