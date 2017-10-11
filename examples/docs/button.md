## Button 按钮

### 使用指南
``` javascript
import { Button } from 'icui';

Vue.component(Button.name, Button);
```

### 代码演示
:::demo
```html
<ic-button>Primary Button</ic-button>
<ic-button loading>Loading</ic-button>
<ic-button disabled>Disabled</ic-button>
<ic-button inline :ripple="false">Inline Button</ic-button>
<ic-button inline>Inline Button</ic-button>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| loading | 加载中的按钮 | `Boolean` | false |
| disable | 不可用的按钮 | `Boolean` | false |
| inline | 行内的按钮 | `Boolean` | false |
| ripple | 显示波纹效果 | `Boolean` | true |
