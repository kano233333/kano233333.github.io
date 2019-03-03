---
title: defineProperty
date: 2019-03-03 15:43:09
tags: 
  - js
---

https://www.cnblogs.com/gaoning/p/8335748.html

## 基本

``````js
var obj = {};
Objetc.defineProperty(obj,'name',{
    value:'', //值
    writable:false | true, //是否可写
    enumerable:false | true, //是否可枚举
    configurable:false | true //是否是可被删除的（delete）
})
||
Object.defineProperty(obj,'name',{
    set:function(){}, //设置值触发的函数
    get:function(){}, //获取值触发的函数
    enumerable:false | true,
    configurable:false | true
})
``````

## get 与 set

```js
var obj = {};
Object.defineProperty(obj,'name',{
    set:function(){
        console.log('...set...');
    },
    get:function(){
        console.log('...get...')
        return 'aaa'
    },
    enumerable:false | true,
    configurable:false | true
})
console.log(obj.name); // ...get...  aaa
obj.name = 'bbb'; // ...set...
```

## 简单的input双向绑定

```html
<input type="text">
```

```js
var obj = {};
Object.defineProperty(obj,'inputVal',{
    set(){},
    get(){
        return document.querySelector('input');
    },
    enumerable:true,
    configurable:true
});
console.log('obj.inputVal'); //在input里输入东西，再打印
```

