---
title: vue_code_func
date: 2019-02-23 18:55:39
tags: 
  - vue
---



# object.freeze()

Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。



# [toString.call()](https://www.cnblogs.com/chris-oil/p/4276803.html)

`````````js
var date = new Date();
console.log(Object.prototype.toString.call(date)) //[object Date]
`````````

``````````javascript
Object.prototype.toString.call(123)  // [object Number]
``````````

``````````javascript
Object.prototype.toString.call(123).slide(8,-1) //Number
``````````

# camelize(将-式字符串改为驼峰式)

字符串最后有 - replace 不了

``````````javascript
function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }
``````````

# reduce()



# Object.keys(obj)

>返回一个对象的key组成的数组

```js
var obj = {
    name:'aaa',
    age:15,
    from:'cq'
};
console.log(Object.keys(obj)); //['name','age','from']
```

