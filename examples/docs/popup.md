<script>
export default {
  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false,
      popupShow5: false
    }
  },

  watch: {
    popupShow3(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow3 = false;
        }, 2000);
      }
    }
  },
};
</script>

## Popup 弹出层

### 使用指南
``` javascript
import { Popup } from 'icui';

Vue.component(Popup.name, Popup);
```

### 代码演示

#### 基础用法

`popup`默认情况下是从中间弹出。

:::demo 基础用法
```html
<ic-button @click="popupShow2 = true">下方弹出</ic-button>
<ic-popup v-model="popupShow2" position="bottom" class="ic-popup-2">
    <ic-button @click.native="popupShow2 = false">关闭 popup</ic-button>
</ic-popup>
```

```javascript
export default {
  data() {
    return {
      popupShow1: false
    }
  }
};
```
:::

#### 从不同位置弹出层

可以设置`position`属性，`popup`即能从不同位置弹出，`position`的可选值有`top`，`bottom`，`right`，`left`。

:::demo 从不同位置弹出层
```html
<ic-button @click="popupShow3 = true">上方弹出</ic-button>
<ic-popup v-model="popupShow3" position="top" class="ic-popup-3" :overlay="false">
    更新成功
</ic-popup>



<ic-button @click="popupShow4 = true">右方弹出</ic-button>
<ic-popup v-model="popupShow4" position="right" class="ic-popup-4" :overlay="false">
<ic-button @click.native="popupShow4 = false">关闭 popup</ic-button>
</ic-popup>


<ic-button @click="popupShow5 = true">左方弹出</ic-button>
<ic-popup v-model="popupShow5" position="left" class="ic-popup-5" :overlay="false">
<ic-button @click.native="popupShow5 = false">关闭 popup</ic-button>
</ic-popup>
```

```javascript
export default {
  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    }
  },

  watch: {
    popupShow2(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前组件是否显示 | `Boolean`  | `false` | - |
| overlay | 是否显示背景遮罩层 | `Boolean`  | `true` | -  |
| lockOnScroll | 背景是否跟随滚动 | `Boolean`  | `false` | - |
| position | 弹出层位置 | `String`  | - | `top`, `bottom`, `right`, `left`  |
| closeOnClickOverlay | 点击遮罩层是否关闭弹出层 | `Boolean`  | `true` | - |
| transition | 弹出层的`transition` | `String`  | `popup-slide` |   |
| preventScroll | 是否防止滚动穿透 | `Boolean`  | `false` | -  |