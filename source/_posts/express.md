---
title: express
tags:
---
## 目录结构

```````
npm init
```````

```
npm install express mysql ejs --save
```



`````````
-node_modules
-routers
-views
app.js  //入口
package.json
package-lock.json
`````````



## 使用

````js
//app.js
let express = require('express');
let ejs = require('ejs');
let app = express();

app.set('view engine','ejs'); //设定视图引擎（view engine）为ejs
app.engine('html',ejs.renderFile); //处理html文件使用ejs

app.get('/',function(req,res){
  res.render('index.html');
});
let serve = app.listen('82',function(){
  console.log('serve running');
});
````

