## Countdown 倒计时组件

### 使用指南
``` javascript
import { Countdown } from 'icui';

Vue.component(Countdown.name, Countdown);
```

### 代码演示

#### 基础用法


:::demo 基础用法
```html
<!--  短信验证码倒计时 -->
<p :disabled="counting" 
    @click="countdown"
    class="countBtn">
    <ic-countdown 
        v-if="counting" 
        :time="10000" 
        @countdownend="countdownend">
        <template scope="props">{{ props.seconds || 60 }}秒重新获取</template>
    </ic-countdown>
    <span v-else>获取验证码</span>
</p>

<!--  时间差倒计时 -->
<ic-countdown 
    :time="time" :interval="100" tag="p">
    <template scope="props">
    当前距离2018年:{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.
    </template>
</ic-countdown>

<script>
export default {
    data () {
        let now = new Date()
        let newYear = new Date(now.getFullYear() + 1, 0, 1)
        return {
            counting: false,
            time: newYear - now
        }
    },
    methods: {
        countdown() {
            this.counting = true;
        },
        countdownend() {
            this.counting = false;
        },
    }
}
</script>
```



:::

### Options

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| time | 倒计时时间（毫秒） | `Number`  | `''` | - |
| countdownend | 结束派发时间 | `Function`  | `''` | -  |
| interval | 刷新时间 | `Number`  | `'1000'` | - |
| autoStart | 自动开启 | `Bollearn`  | `'true'` | - |

