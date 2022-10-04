## IntersectionObserver对象（html5)

### 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗 (viewport) 交叉状态的方法。

> 当一个IntersectionObserver对象被创建时，其被配置为监听根中一段给定比例的可见区域。一旦 IntersectionObserver 被创建，则无法更改其配置，所以一个给定的观察者对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。

### 构造函数
```js
var observer = new IntersectionObserver(callback[, options]);
```
#### callback
当元素可见比例超过指定阈值后，会调用一个回调函数，此回调函数接受两个参数： 
+ entries 一个IntersectionObserverEntry对象的数组，每个被触发的阈值，都或多或少与指定阈值有偏差
+ observer 被调用的IntersectionObserver实例。

#### options 可选
+ root 监听元素的祖先元素Element对象
+ rootMargin 偏移量
+ threshold 规定了一个监听目标与边界盒交叉区域的比例值  (0.0 到 1.0)
 
### 方法
#### disconnect
终止对所有目标元素可见性变化的观察。

#### observe
+ 参数： targetElement 可见性区域被监控的元素element
+ 添加一个元素。一个监听者有一组阈值和一个根，但是可以监视多个目标元素

#### takeRecords
返回值：IntersectionObserverEntry 对象数组，每个对象包含目标元素与根每次的相交信息

#### unobserve(target)
要取消观察的目标


### 兼容性
+ chrome 51+
+ firefox 55+ (root)76+

> Experimental: 这是一个实验中的功能
此功能某些浏览器尚在开发中，请参考浏览器兼容性表格以得到在不同浏览器中适合使用的前缀。由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。

