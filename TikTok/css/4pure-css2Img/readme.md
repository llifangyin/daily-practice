## 整理思路
1. 通过css **boxshadow**属性 来刻画1px 1px的多个shadow来实现绘图
2. 借助**canvas-getImageData**来获取像素点
   + getContext-->drawImage-->getImageData
3. 拼接模板，通过**blob**对象实现下载HTML模板
+ new Blob([htmlstr],{type:"text/html"})
+ url = window.URL.createObjectURL(blob)
+ a = document.createElement('a') ;  a.href = url;a.click()


