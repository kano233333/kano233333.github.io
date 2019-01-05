---
title: hexo自定义themes
tags:
---
## 初

>themes目录下新建一个文件夹（kano）
>
>_config.yml 里 theme:kano

## 结构

> languages
>
> layout
>
> > _partial
> >
> > index.ejs
>
> scripts
>
> source
>
> > _post
> >
> > css
> >
> > js
>
> _config.yml

## 主题模块渲染核心

- ### 模块继承

  > layout里的模块，默认继承layout模块
  >
  > 即：
  >
  > ``````
  > ---
  > layout:layout
  > ---
  > ``````
  >
  > 指定模块继承xxx模块
  >
  > `````
  > ---
  > layout:xxx
  > ---
  > `````

- ### 入口index.ejs

  >默认继承layout模块
  >
  >- 主要用来遍历post文章
  >
  >````````ejs
  ><% page.posts.each(function(post){ %>
  >post是source/_post目录下的md文章
  ><% }) %>
  >````````
  >
  >- 跳转链接
  >
  >```````````
  ><%- url_for(post.path) %>
  >```````````
  >
  >- 文章摘要
  >
  >``````
  ><%- post.excerpt %>
  >``````
  >
  >在md里要用
  >
  >````
  ><!-- more -->
  >````
  >
  >来标记

- ### layout.ejs 模块

  > html的主要结构
  >
  > head body分块
  >
  > 展示index.ejs里的东西
  >
  > 要用
  >
  > **<%- body %>**
  >
  > ~~我还不晓得为啥子~~

> 页面主体框架，搭在里面
>
> ```html
> <html>
>     <head></head>
>     <body></body>
> </html>
> ```
>
>

## 引入js,css

> ```
> <%- css('css/main.css',...) %>
> 默认会去source目录下面找，只需要填入main.css文件在source目录下的位置
> ```

## hexo与github关联

> //_config.yml
>
> ```````yml
> deploy: 
> 	type: git
> 	repository: git@github.com:kano233333/kano233333.github.io.git
> 	branch: master
> 
> ```````
>
> //cmd
>
> ```
> npm install hexo-deployer-git --save
> hexo clean
> hexo g
> hexo d
> ```
>



*************************************

> git
>
> master 是 hexo d 后的文件
>
> hexo 是 hexo的原码
>
> > git checkout xxx
> >
> > git push origin xxx:xxx

