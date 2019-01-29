---
title: drag
date: 2019-01-29 15:24:48
tags: 
  - html5
---

````html
<!-- draggable='true' 声明可以拖拽 ondragstart拖动发生的事件 -->
<div id='a' draggable='true' ondragstart='start(event)'></div>
<!-- ondragover规定在何处放置被拖动的数据 ondrop放置被拖数据 -->
<div id='b' ondragover='over(event)' ondrop='drop(event)'></div>

<script>
    function start(ev){
        // 设置被拖数据的数据类型(id)和值(xxx)
        // 方便获取被拖动元素的id与 下面getData相呼应
        ev.dataTransfer.setData('xxx',ev.target.id);
    }
    function over(ev){
        // 阻止默认处理方式 (允许一个元素放在另一个元素上)
        ev.preventDefault();
    }
    function drop(ev){
        // 阻止默认处理方式
        ev.preventDefault();
        // 相当于 获取被拖动元素的之前声明的数据类型(id)的值(a) 通过相同的值(xxx)
        var data=ev.dataTransfer.getData('xxx');
        // 将被拖元素放入目标中 (变成它的孩子)
        ev.target.appendChild(document.getElementById(data));
    }
</script>
````

dataTransfer.setData('xx',xx)  dataTransfer.getData(xx)

为了appendChild(document.querySelector(xxx))到拖动对象的className | id

如果知道className | id 也可以不用