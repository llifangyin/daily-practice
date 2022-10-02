## 鼠标移入动画暂停
> 如果相反需求 初始化不动鼠标移入开始
        则开始时paused 移入running 

```js

/* 鼠标移入动画暂停 */
  .container:hover{
      animation-play-state: paused;
  }
```


## 倒影功能实现
box-reflect  长方体反射
> The -webkit-box-reflect CSS property lets you reflect the content of an element in one specific direction.
```js
-webkit-box-reflect =
  [ above | below | right | left ]? <length>? <image>?
```
```js
/* Direction values */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Offset value */
-webkit-box-reflect: below 10px;

/* Mask value */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Global values */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```