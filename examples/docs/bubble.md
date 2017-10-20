## Bubble 气泡

### 使用指南
``` javascript
import { Bubble } from 'icui';

Vue.component(Bubble.name, Bubble);
```

### 代码演示

#### 
* `<ic-bubble></ic-bubble>`标签子元素为`<li></li>`
* 通过调用组件中show()方法来控制气泡显隐

:::demo
```html
点击显示底部气泡：
<ic-button @click="show1" ripple>点击显示底部气泡</ic-button>
<ic-bubble pos='top:171px;right:61px' ref="bubble1">
    <li>1111111111</li>
    <li>2222222222</li>
    <li>3333333333</li>
    <li>4444444444</li>
</ic-bubble>

显示顶部气泡：
<ic-button @click="show2" ripple>点击显示顶部气泡</ic-button>
<ic-bubble pos='bottom:171px;left:71px' ref="bubble2" up>
    <li>1111111111</li>
    <li>2222222222</li>
    <li>3333333333</li>
    <li>4444444444</li>
</ic-bubble>

<script>
export default {
	methods: {
		show1 () {
			this.$refs.bubble1.show()
		},
		show2 () {
			this.$refs.bubble2.show()
		}
	}
}
</script>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| pos | 位置(绝对定位) | `String` | ‘left:0;top:0’ |
| up | 气泡方向 | `Boolean` | false |

* 通过设置pos值来设定气泡位置，pos值为绝对定位。
