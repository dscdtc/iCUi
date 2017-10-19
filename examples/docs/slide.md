## Slide 滑动输入条

### 使用指南
``` javascript
import { Slide } from 'icui';

Vue.component(Slide.name, Slide);
```

### 代码演示

#### 

:::demo
```html
<ic-slide 
    :percent="percent2"
    @percentMove="onPercentMove2"
    @percentEnd="onPercentEnd2"
    :trackStyle="trackStyle"
    :handleStyle="handleStyle"
    :railStyle="railStyle"
></ic-slide>
<script>
    export default {
        data() {
            return {
                percent1:0.5,
                percent2:0,
                trackStyle:{
                    background:'red'
                },
                handleStyle:{
                    background:'blue'
                },
                railStyle:{
                    background:'blue'
                }
            }
        },
        methods: {
           onPercentMove1(percent) {
               this.percent1 = percent
           },
           onPercentEnd1(percent) {
               this.percent1 = percent
           },
           onPercentMove2(percent) {
               this.percent2 = percent
           },
           onPercentEnd2(percent) {
               this.percent2 = percent
           }
        }
    }
</script>
```

:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| percent| 初始化进度条 | `Number` | ` '0' ` |
| trackStyle | 选中部分滑动条的样式 | `Object` | `#47c9bc`|
| handleStyle | 滑块的样式 | `Object` | `#47c9bc`|
| railStyle	 | 未选中部分 | `Object` | ` background:'rgba(0,0,0,.3)'`|
|percentMove | 滑动时派发的事件 | `Function` | ` ''`|
|onPercentEnd | 滑动结束后派发的事件 | `Function` | ` ''`|

