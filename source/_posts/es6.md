---
title: es6
tags:
---
## ...   （三点运算符）

将 **数组**||**对象**    展开成为一系列用 , 隔开的值

``````js
let arr = ['a','b','c'];
console.log(arr[0],arr[1],arr[2]); //a b c
console.log(...arr); //a b c
``````



- #### 为数组添加元素

`````js
let arr1 = ['a'];
let arr2 = ['b'];
let arr3 = [...arr1，...arr2,'c'];
console.log(arr3);  // ['a','b','c']
`````

- #### 在 vue 中的使用

`````js
//router.js
routes:[
    {
        path:'/',
        redirect:'/index'
    },
    ...page  //将接收的数组，添加到routes数组里
]
`````

``````js
// page/router.js
export default [  //导出的是一个数组
    {
        path:'/page',
        name:'page',
        component:page
    }
]
``````

- #### 与**解构**结合

````js
let [str,...arr] = ['a','b','c','d'];
console.log(str);  // 'a'
console.log(arr);  // ['b','c','d']
````

- #### 将字符串转换为数组

````js
let arr = [...'abc'];
console.log(arr);  //['a','b','c']
````

## rest 参数

(...xxx)

将参数放进数组中，可以替代 arguments

`````````js
function xxx(str,...value){
    console.log(str);
    console.log(value)；
}
xxx('a','b','c','d');
// 'a'
// ['b','c','d']
`````````

**rest参数之后，不能再有其他参数**

## keep-alive

## promise

- ### 基本用法

  > Promise中的参数`executor`是一个执行器函数，它有两个参数`resolve`和`reject`
  >
  > 异步操作成功，则可以调用resolve()来将该实例的状态置为`fulfilled`
  >
  > 失败，可以调用reject()来将该实例的状态置为`rejected`

  `````js
  let pro = new promise(function(resolve,reject){
      resolve('sucess');
  })
  .then(function(data){
      ...
  })
  .catch(function(err){
      ...
  })
  `````

- ### 应用
