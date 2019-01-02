# vue-init

## 目录结构

> -build
>
> -config
>
> -node_modules
>
> -src
>
> -static
>
> .babelrc
>
> .editorconfig
>
> .gitgnore
>
> .postcssrc.js
>
> index.html
>
> package.json
>
> package-lock.json
>
> README.md
>
> yarn.lock
>
>



src目录下的东西

> -assets
>
> -components   //组件
>
> -global   //全局资源
>
> -lib  //第三方插件库
>
> -store  //vuex
>
> -svg   
>
> -views   //视图组件和相应的路由
>
> api.js
>
> App.vue
>
> main.js
>
>

src目录里的东西全部被目录里的index.js文件引入

main.js再将src目录下的东西全部声明为全局