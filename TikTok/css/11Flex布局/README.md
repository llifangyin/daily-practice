## flex布局概念

> Flexible Box模型，通常被成为flexbox，是一种一维的布局模型。它给flexbox的子元素之间提供了强大的空间分布和对齐能力。

一维： 一次只能处理一个维度上的元素布局，一行或一列。
二位布局： CSS Grid Layout 可以同时处理行和列的布局

### flexbox的两根轴线

当使用flex布局时，首先想到时两根轴线-主轴和交叉轴。

#### 主轴
flex-direction:row  row-reverse (inline方向) column  column-reverse (block)

#### 交叉轴
交叉轴垂直于主轴


### 起止线和终止线
概念：start => end 

### flex容器
采用flex布局的区域叫flex容器。dispaly:flex || inline-flex
容器中的直系子元素会变成flex元素。

flex元素都有后下列行为(初始值)：
+ 元素排列为一行，flex-direction初始值为row
+ 元素从主轴的起始线开始
+ 元素不会在主维度方向拉伸，但是可以缩小
+ 元素被拉伸来填充交叉轴发i笑傲
+ flex-basis:auto
+ flex-wrap:nowrap



#### flex-wrap 实现多行的flex容器
flexbox是一维模型，但可以使我们的flex项目应用到多行中。这样时，应该把每一行看作一个新的flex容器。任何空间分布都将在改行上发生，不影响改空间分布的其他行


#### 简写属性 flex-flow  = flex-directino flex-wrap
> flex-flow: row wrap



### flex元素的属性
+ flex-grow 
+ flex-shrink
+ flex-basis

> 可用空间 available space; 这几个属性的作用就是改变了flex容器中的可用空间的行为.可用空间对flex元素的对齐行为很重要.

#### flex-basis:auto |content| fit-content|max-content|min-content|revert| unset|
定义了该元素的空间大小(this size of that itme in items of the space)
flex容器里除了元素占的空间意外的富裕空间就是可用空间available space
默认auto,浏览器会检查是否设置了尺寸,如果没有flex-basis会采用元素内容的尺寸.

#### flex-grow
flex-grow若被赋值为一个正整数,flex元素会以flex-basis为基础,沿主轴方向增长尺寸.

#### flex-shrink
元素收缩,值越大收缩程度越大

### flex属性的简写  initial | auto | none | <positive-number>
flex: 0 1 auto ==


+ initial = flex:0 1 auto

flex-grow:0  // 0 flex元素不会超过他们的flex-basis的尺寸
flex-shrink:1 //可用缩小防止溢出
flex-basis:auto //设置的宽度 || 内容宽度

+ auto flex:1 1 auto  
跟initial基本相同,这里flex元素在需要的时候可以拉伸和收缩
+ none flex: 0 0 auto
元素不能拉伸和收缩
+ flex:1 | flex:2 
相当于flex 1 1 0 或者flex 2 1 0 元素在flex-basis为0 的基础上进行伸缩

### 元素间的对其和空间分配
#### align-items 交叉轴的方向对齐
+ stretch 默认值 默认拉伸到最高元素的高度,实际上他们被拉伸填满flex容器.最高的元素定义了容器的高度
+ flex-start
+ flex-end
+ center

#### justify-content 使元素在主轴方向对齐
+ stretch 
+ flex-start
+ flex-end
+ center
+ space-between
+ space-around