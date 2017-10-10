## iCUi

一套基于`Vue.js 2.0`的 Mobile 组件库

### 安装

```shell
npm i icui -S
```

### 引入组件

#### 按需引入组件

```js
import { Button } from 'icui';
import 'icui/lib/icui-css/button.css';
```
#### 或者
```js
import Button from 'icui/lib/button';
import 'icui/lib/icui-css/button.css';
```

#### 导入所有组件
 
```js
import Vue from 'vue';
import icui from 'icui';
import 'icui/lib/icui-css/index.css';

Vue.use(icui);
```
