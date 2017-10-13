## Textarea 输入

### 使用指南
``` javascript
import { Textarea } from 'icui';

Vue.component(Textarea.name, Textarea);
```

### 代码演示

#### 基础用法

`popup`默认情况下是从中间弹出。

:::demo 基础用法
```html
<ic-textarea :max="50" name="description" :placeholder="'提示'"></ic-textarea>
```

:::

#### 定制高度和自使用
:::demo 
```html
<ic-textarea :placeholder="'高度自适应'" :show-counter="false" autosize></ic-textarea>

<ic-textarea :placeholder="'限制高度'" :show-counter="false" :height="200" ></ic-textarea>
```


:::

### Options

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| show-counter | 是否限制输入字数 | `Boolean`  | `false` | - |
| height | 输入框高度 | `String`  | `true` | -  |
| autosize | 高度自适应 | `Boolean`  | `false` | - |
| max | 最多输入限制 | `Number`  | `` | - |
