## Color 色彩

K-UI 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

K-UI 主要品牌颜色是鲜艳、友好的蓝色。

<div class="com-container mb-3">
  <div class="Blue color-style">#2d8cf0</div>
</div>

``` html
<div class="Blue"></div>
```

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<div class="com-container mb-3">
  <div class="Success color-style float-left">#19be6b</div>
  <div class="Warning color-style float-left ml-3">#ff9900</div>
  <div class="Danger color-style float-left ml-3">#f56c6c</div>
  <div class="Info color-style float-left ml-3">#80848f</div>
  <div style="clear: both"></div>
</div>

``` html
<div class="Success"></div>
<div class="Warning"></div>
<div class="Danger"></div>
<div class="Info"></div>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| class     | 类名   | string  |   Blue / Success / Warning / Danger / Info |  无 |