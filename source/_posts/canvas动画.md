---
title: canvas动画
date: 2019-01-29 15:32:48
tags: 
  - canvas
---

## 动画原理

```javascript
var myCanvas = document.getElementById('my-canvas');
var ctx = myCanvas.getContext('2d/3d');
ctx.fillRect(x,y,w,h);
```


canvas 画上屏的元素，立即被像素化，不再是一个对象

canvas 运动的原理：（无限循环）清屏--->重绘  +   setInterval

清屏：清除整个画布  
```javascript
clearRect(0,0,widht,height)
```

## 核心

核心：**面向对象**

将一个形状封装为一个对象，必要的变量定义在对象实例中，公共的函数可以最好定义在原型上


⭐技巧：**产生多个对象**
```javascript
var objArr = [];

function obj(){
 this.x = ...;
 ...
 objArr.push(this);
}
```

只要一进行**new obj()**  --->   在objArr数组中添加对象实例

结合
```javascript
setInterval(function(){
  new obj();
  for(var i=0;i<objArr.lenght;i++){
    objArr[i].xxx();  //因为每次都会清空画布，要保证原来的运动的图形还存在--->使用for循环每次进行触发 
    ...
  }
  ctx.clearRect(0,0,ctx.width,ctx.height);
},200)
```

## 结合图片

将图片连续起来，做成动态效果

要在图片加载完成之后使用图片
```
var img = new Image();

img.onload = function(){

  ...
}
```

方法：
> x,y：定位图片的坐标
> width,height：设置图片的宽高
> sx,sy：定位图片被剪切的坐标
> swidth,sheight：设置被剪切部分的宽高
> - 三个参数
> >   ctx.drawImage(img,x,y)
>
> - 五个参数
> >   ctx.drawImage(img,x,y,width,height)
> - 九个参数
> >   ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)