## SearchBar 搜索栏

### 使用指南
``` javascript
import { Search } from 'icui';

Vue.component(Search.name, Search);
```

### 代码演示

#### 

:::demo
```html
DEMO1:
<ic-search
    @search="searching"
></ic-search>

DEMO2:
<ic-search
    class="search"
    mark="点击查询对象"
    placeholder="老子要找！对！象！"
    @search="searching"
></ic-search>

<script>
export default {
	methods: {
		searching (searchValue) {
			alert('你搜索的内容为：' + searchValue)
		}
	}
}
</script>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| mark | 提示语 | `String` | ‘点击搜索’ |
| placeholder | 返回 | `String` | ‘搜索’ |

