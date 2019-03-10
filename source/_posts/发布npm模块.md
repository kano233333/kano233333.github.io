---
title: 发布npm模块
date: 2019-03-10 21:15:49
tags: 
  - npm
---

## vue

```
vue init webpack my-project
```

## 组件

> 主要是：
>
> 编写好的组件 + export出组件
>
> 其他的文件都没什么用

```js
//export出组件  /src/index.js
import XXX from './xxx.vue'
const xxx = function(Vue){
    Vue.component('xxx',XXX)  //直接挂在全局上
}
export default xxx;

```

## 配置

```js
//webpack.config.js
  entry: './src/index.js',  //改成export组件的文件
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'xxx.js',
    library: 'xxx',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
```

```json
//package.json
{
    "license": "MIT",
    "private": false,
    "main": "dist/xxx.js",  //npm 后使用的文件和打包出的js文件一致
} 
```

## .npmignore

> 上传忽略的文件

```
.*
*.md
*.yml
build/
node_modules/
src/
```

## 发表

> 打包出来
```
npm run dev
```
> 登录

```
npm login
```

> 发表

```
npm publish
```

## 注意

- 每次上传前要 **npm build**   &&   **更新版本号（version）**