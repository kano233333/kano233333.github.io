---
title: rain
date: 2019-01-29 15:49:28
tags: 
  - canvas
---

canvas实现小雨滴

<!--more-->

## 原理

![img](/css/md-img/rain1.PNG)![img](/css/md-img/rain1.PNG)

由**渐变**方块组成

每次**不对画布进行清屏**，每次为画布加带**透明度**的背景，背景的透明度会进行**叠加**，之前的方块被盖在叠加过后的背景下

```javascript
setInterval(function(){
    ctx.fillStyle = "rgba(0,0,0,"+**0.02**+")";  //背景颜色为rbg(0,0,0)
    ctx.fillRect(0,0,w,h);  //w=100vw,h=100vh
    ...  
})
```



## 实现<a href="/Canvas/rain.html"><img src='/css/img/icon.png' style="width:40px;height:40px;"></a>

### 随机生成无数小雨滴

> 使用数组
> 在对象实例中：arr.push(this);

### 泡泡效果

> 同雨滴效果
> 用strokr()画
> r++;

### 大概思路： 
> - 创建雨滴，泡泡对象 
> - 通过new Rain()  push(this)创建无数个雨滴 
> -  定时器中循环调用雨滴数组里每个对象的方法
> - 当雨滴走过随机生成的长度
> - new Paopao(x,y) 传入雨滴消失点的坐标(x,y) 
> - 同理产生泡泡
> - 雨滴，泡泡的消失：
> - 将定时器里循环的i传入，对象的方法，达到条件，将雨滴/泡泡数组**splice(i,0)**