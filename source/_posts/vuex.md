# vuex 

## 安装

> npm install vuex --save



## 引入

> 可以像使用router一样
>
> src目录下新建一个store目录  再新建 index.js 文件
>
> `````js
> //  src/store/index.js
> import Vue from 'vue'
> import vuex from 'vuex'
> 
> Vue.use(vuex)
> 
> export defalut new vuex.Store({})
> `````
>
> 将store挂在组件上
>
> ```````js
> // main.js
> import store from './store'
> 
> new Vue({
>     ...
>     store,
>     ...
> })
> ```````



## state



