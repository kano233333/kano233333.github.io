---
title: reduce
date: 2019-02-25 17:55:08
tags: 
  - js
---

# reduce

## 基本操作

> 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

```js
var arr = ['a','b','c'];
var add = function(total,num){
    return total+num;
}
console.log(arr.reduce(add)); //'abc'
```

## 参数

> 每次将add函数 return 的内容,作为下一次调用add函数的第一个参数

```js
arr.reduce(callback,[initialValue])
```

### callback()

> 每次回调的函数

````js
callback(previousValue,currentValue,index,array);
````

#### previousValue

> 第一次使用：
>
> - 指定了reduce里的第二个参数initialValue
>
>   previousValue = initialValue
>
> - 没有指定了reduce里的第二个参数initialValue
>
>   previousValue = arr[0]
>
> 后面调用callback
>
> previousValue = 函数上次 return 的值

#### currentValue

> 数组中当前被处理的元素

#### index

> 当前元素在数组中的索引

#### array

> 调用 reduce 的数组

### initialValue

> 指定第一次调用callback的第一个参数



## 进阶

https://segmentfault.com/a/1190000010731933#articleHeader2

