## Search 搜索栏

### 使用指南
``` javascript
import { Search } from 'icui';

Vue.component(Search.name, Search);
```

### 代码演示

#### 

:::demo
```html

<ic-search
    ref="search"
    @change="Onchange"
    :debounce="200"
    :placeholder="placeholder">
</ic-search>


```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|

| placeholder | placeholder | `String`  | `''` | -  |
| debounce | 节流时间 | `Number`  | `''` | - |
| change | onChange派发时间 | `Function`  | `` | - |
