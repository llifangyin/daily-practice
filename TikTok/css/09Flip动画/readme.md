## Flip动画解决方案

>Flip:翻转 The plane flipped and crashed.

+ F：first 记录起始位置
+ L：last 记录结束位置
+ I: invert 翻转元素到起始位置
+ P: play 播放动画回到结束位置

> 实例： 排序 vue里的transition

## 实现过程
1. 记录起始位置
2. 记录结束位置
3. **翻转元素** （计算偏移量，通过transtion 偏移到初始位置）
4. 播放。重置transiton 动画移动到结束位置