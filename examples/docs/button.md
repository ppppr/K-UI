## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

使用`type`属性来定义 Button 的样式。

<div class="com-container mb-3">
  <k-button>默认按钮</k-button>
  <k-button class="ml-3 mr-3" type="primary">主要按钮</k-button>
  <k-button type="danger">危险按钮</k-button>
</div>

```html
<div>
  <k-button>默认按钮</k-button>
  <k-button type="primary">主要按钮</k-button>
  <k-button type="danger">危险按钮</k-button>
</div>
```

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们,默认是`medium`。

<div class="com-container mb-3">
  <div>
    <k-button>默认按钮</k-button>
    <k-button class="ml-3 mr-3" size="small">小型按钮</k-button>
    <k-button size="mini">超小按钮</k-button>
  </div>
  <div class="mt-3 mb-3">
    <k-button type="primary">默认按钮</k-button>
    <k-button class="ml-3 mr-3" size="small" type="primary">小型按钮</k-button>
    <k-button size="mini" type="primary">超小按钮</k-button>
  </div>
  <div>
    <k-button type="danger">默认按钮</k-button>
    <k-button class="ml-3 mr-3" size="small" type="danger">小型按钮</k-button>
    <k-button size="mini" type="danger">超小按钮</k-button>
  </div>
</div>

```html
<div>
  <k-button>默认按钮</k-button>
  <k-button size="small">小型按钮</k-button>
  <k-button size="mini">超小按钮</k-button>
</div>
<div>
  <k-button type="primary">默认按钮</k-button>
  <k-button size="small" type="primary">>小型按钮</k-button>
  <k-button size="mini" type="primary">>超小按钮</k-button>
</div>
<div>
  <k-button type="danger">默认按钮</k-button>
  <k-button size="small" type="danger">>小型按钮</k-button>
  <k-button size="mini" type="danger">>超小按钮</k-button>
</div>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini |  medium |
| type     | 类型   | string    |   normal / primary / danger | normal |

### Methods
| 方法名      | 说明    | 参数   |
|---------- |-------- |---------- |
| click     | 点击事件   | 无 |