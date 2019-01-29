---
title: canvas旋转
date: 2019-01-29 15:42:21
tags: 
  - canvas
---

ctx.rotate(x);

默认是围绕ctx画布原点（0，0）进行旋转  【不好】

将坐标系移动到旋转对象的几何中心再进行旋转

```javascript
ctx.translate(x,y);
ctx.rotate(x);
....
```

**先旋转--->再画图**

如果设置定时setInterval要保存每次旋转的角度

![img](/css/md-img/rotate1.PNG)

```
ctx.save();
...
ctx.restore();
```

![img](/css/md-img/rotate2.PNG)![img](/css/md-img/rotate3.PNG)



坐标轴y方向是向下的

![img](/css/md-img/rotate4.PNG)



下落+旋转

![img](/css/md-img/rotate5.PNG)

所以 在下落的过程中必须保证x,y的坐标是相对坐标原点是不变的

---->  不改变 x,y 的值，改变坐标原点的值

```javascript
ctx.save();
ctx.translate(100,100+h);   // h:每次下落的高度
ctx.drawImage(image,100,100);
ctx.rotate(x);
ctx.restore();
```



















