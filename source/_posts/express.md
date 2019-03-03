---
title: express
tags: 
 - node
 - express
---

## 目录结构

```````
npm init
```````

```
npm install express mysql ejs --save
```

```
npm install -g express-generator
```



`````````
-node_modules
-routers
-views
app.js  //入口
package.json
package-lock.json
`````````



## app.js

- ### init

  ````js
  let express = require('express');
  let app = express();
  ````

- ### 设置html模板引擎

  `````js
  let ejs = require('ejs');
  app.set('view engine','ejs'); //设定视图引擎（view engine）为ejs
  app.engine('html',ejs.renderFile); //处理html文件使用ejs
  `````

- ### 引入路由

  ``````js
  var indexRouter = require('./routes/index');
  var usersRouter = require('./routes/users');
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  ``````

- ### 配置静态文件路径

  ````````js
  app.use(express.static(path.join(__dirname, 'public')));  //静态文件在public目录下
  
  app.use('/',express.static(‘public’)) //指定访问路径
  ````````

## routes

```js
//..routes/index.js (html路由)
router.get('/', function(req, res, next) {
 	 res.render('index.jade', { title: 'Express'});
});
```

> 可以把html路由和接口路由分开放置

## 错误处理

### 404

> 在Express中，404响应不是错误的结果，因此错误处理程序中间件不会捕获它们。这种行为是因为404响应只是表明没有额外的工作要做; 换句话说，Express已经执行了所有中间件功能和路由，并发现它们都没有响应。您需要做的就是在堆栈的最底部添加一个中间件函数（在所有其他函数之下）来处理404响应

``````js
//app.js
app.use(function(req,res,next){
    console.log(req)
})
``````

### 错误处理器

> 错误处理器中间件的定义和其他中间件一样，唯一的区别是 4 个而不是 3 个参数

```js
//app.js
app.use(function(err,req,res,next){
    res.status(500).send('error');
})
```

## node 连接mysql

### 连接

```js
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'xxx',
    database:''
});
connection.connect();
```

### 操作

```js
let sql = 'xxx';//操作mysql的语句
connection.query(sql,function(err,result){
   if(err){
     res.send('[error]:'+err.message);
   }else{
     res.render('../views/xxx',{data:result})
   }
})
```



## 基本

### 中间键

> app.use(function(req,res,next))接收一个函数，其中一个参数response ，对其进行操作

```js
res.send()
```

> 默认status为200，Content-Type头部为text/html

```js
res.status(404).send('...')
```

> 指定状态码进行操作

### send()

> res.send('xxx')
>
> 发送数据，直接打印在页面上

### render()

> res.render('/views/xxx.html')
>
> 指定views里的模板文件进行渲染

### 分块

> 用exports导出，require接收
>
> require接收的是exports的模块组成的对象

sp：

```js
//router.js
let router = function(app){  //要传入app
    app.get('/',function(req,res){
        res.render('...')
    })
}
exports.router = router;
```

```js
//app.js
let router = require('/router.js')
router.router(app); //传入app
```

