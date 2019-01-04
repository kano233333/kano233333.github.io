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

## 模块

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

