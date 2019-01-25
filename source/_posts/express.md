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
  ````````

## routes

```js
//..routes/index.js (html路由)
router.get('/', function(req, res, next) {
 	 res.render('index.jade', { title: 'Express'});
});
```

> 可以把html路由和接口路由分开放置