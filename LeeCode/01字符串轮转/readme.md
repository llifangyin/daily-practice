##  字符串轮转

>字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

>字符串长度在[0, 100000]范围内。
### 示例1
 输入：s1 = "waterbottle", s2 = "erbottlewat"
 输出：True

 ### 示例2

 输入：s1 = "aa", s2 = "aba"
 输出：False


 ### 思路1  傻瓜了 😢
 假设轮转中心字符串的长度为midLen
 遍历字符串s1的length,从第0为至s1.length-1为 开始截取
 列举所有可能轮转后的字符串到arr
 判断includes 

 [index1.js](./index.js indexjs)

问题：没有考虑字符串长度最大为10000，容易内存溢出
```js
FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
```

### 思路2

翻转规律

s1+s1 == str1+ s2 + str2
str2 + str1 == s2

```js
 return (s1+s1).indexOf(s2)>-1&&s1.length==s2.length
```

> **总结，通过笨方法是效率最低的事情，而且可能造成运行慢，堆栈溢出等问题，找到问题的规律，巧化解题步骤。**