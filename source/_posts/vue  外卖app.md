---
title: vue  外卖app
tags:
---
## 创建项目

```
vue init webpack project-name
```

## 分类

```
-src
	-common
		-fonts (svg通过icomoon转换的图标的fonts)
		-js
		-stylus
			-style.styl (svg通过icomoon转换的图标的style.css改为stylus格式)
	-components
		-goods
		-header
		-ratings
		-seller
		-star
```

## 将svg转换为icon

https://icomoon.io/

将下载后的压缩包里的fonts和style.css加到项目里面

style.css  ---->   style.styl

```
-common
	-fonts
		-...
	-stylus
		-style.styl
```

```js
//main.js
import "./common/stylus/style.styl"
```



## 请求本地模拟数据

```js
//webpack.dev.conf.js
const express = require('express')
const app = express()
var appData = require('../data.json')//加载本地数据文件
var seller = appData.seller//获取对应的本地数据
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
```

```js
  //webpack.dev.conf.js 中 devServer
  app.get('/api/seller', (req, res) => {
    res.json({
      errno: 0,
      data: seller
    })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
  }),
  app.get('/api/goods', (req, res) => {
    res.json({
      errno: 0,
      data: goods
    })
  }),
  app.get('/api/ratings', (req, res) => {
    res.json({
      errno: 0,
      data: ratings
    })
  })
}
```



url后自动生成# 不得行

url 去掉#

```js
//index.js
export default new Router({
  mode:'history',  //加入这句话
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```



## 拆组件

- 引入reset.css(static/css)，去掉标签默认样式（在index.html里link添加的）

- 在index.html中引入reset.css（去掉默认样式）

- 编写组件（组件的名字不要与html标签重合error）

- 写less

  ```css
  <style lang="less" rel="stylesheet/less"></style>
  ```

  要进行安装

  ```
  npm install --save-dev less-loader less
  ```

- 配置vue-router



## 配置 vue-router

```html
<router-link to="/xxx"></router-link>
<router-view></router-view>  
```

```js
//index.js
import xxx from "path"
new Router({
    routes:[
        {
            path: '/xxx',
            name: 'xxx',
            component: xxx
        }
    ]
})
```

### 默认页面路由

- #### 直接跳转指定路由 

  ```js
  //index.js
  new Router({
      routes:[
          {
              path: '/',
              redirect: '/xxx'
          }
      ]
  })
  ```

  进入后url直接就是  **http://..... /xxx**

  路由重定向到了/xxx

### router-link
生成a标签

### router-link-active
展示某个路由时

  \<router-link>\</router-link>会自动添加 router-link-active 的className  ---->   用来设置样式

  ```js
  //index.js
  new Router({
      //router-link-active  ---->  active
      linkActiveClass:'active'  //可以改变自动添加的className
  })
  ```

  sp:

  ```html
  <div>
      <router-link to="/xxx">aaaaa</router-link>
  </div>
  
  <style>
      div {
          color:#000;
      }
      div .active {
          color:red;
      }
  </style>
  ```

  当\<router-view>\</router-view>展示xxx路由时，原来的\<router-link>\</router-link>生成的a标签会自动产生active的className，只要对.active进行设置样式，就可以改变\<router-link>的样式

### 配置第一层路由

- #### 商品（goods）

- #### 评论（ratings）

- #### 卖家（seller）



## vue-resource

- #### package

  ```json
  //package.json
  "dependencies": {
      "vue-resource":"^1.5.1"  
  }
  ```


- #### npm install

- #### 引入

  ```js
  //index.js
  import VueResource from "vue-resource"
  //相当于声明为全局
  Vue.use(VueReasource)
  ```

- #### 使用

  使用模拟数据  api/xxx

  ```vue
  //App.vue
  export defalut {
  	data(){
  		return {
  			seller:{};
  		}
  	},
  	create(){
  		this.$http.get('api/xxx').then(
  			function(response){  
  				//处理response
  				let dataJson = JSON.parse(response.bodyText);
  				if(dataJson === ERR_OK){
  					this.seller = dataJson.data;
  				}
  			},
  			function(response){...}
  		)
  	}
  }
  ```


## sell-header组件

- #### 将数据传给sell-header组件

- #### sell-heade组件 props接收数据

- #### 使用

  ```vue
  //sell-header.vue
  <img :src="seller.avatar">
  ```

- #### 写样式

## css sticky footer

[详情](https://mp.weixin.qq.com/s?__biz=MzU0OTE3MjE1Mw%3D%3D&mid=2247483693&idx=1&sn=ea846c8a1b404a8a0aa5a5175059e0f4&chksm=fbb2a7fbccc52eed1b62f21503d93449c8425c464d5b4ac576facadf560f95ab9ea8aca5484b&mpshare=1&scene=23&srcid=1120MlKsKxWYxEsbttZ5V0CO)

## detail块

### star组件

- 多处需要使用评分，独立为一个组件
- 大致思路
  - 根据父组件传入的score分数
  - v-for添加不同的className（不同的className对应不同的星星背景）
  

```vue
//star.vue
<template>
	<div class="star">
		<span v-for="item in itemClasses" :class="item"></span>
	</div>
</template>

<script>
    export default {
        name:'star',
        props:{
            score:{
                type:Number
            }
        },
        computed:{  //通过计算属性return className的数组
            itemClasses(){
                let x=this.score;
        		let itemArr = [];
        		for(let i=0;i<5;i++){
          			if(x>=1){
            			itemArr[i]='star-on';
          			}else if(x>=0.5 && x<1){
            			itemArr[i]='star-half';
          			}else{
            			itemArr[i]='star-off';
          			}
          			x--;
       		 	}
            	return itemArr;
            }
        }
    }
</script>

<style>
    .star-on {...}
    .star-half {...}
    .star-off {...}
</style>
```

```vue
//使用star组件
<Star :score="parseFloat(seller.score)"></Star>
...
import Star from 'path'
components: {Star}
```

### 添加动画

```
<transition name="detailShift"></transition>
```

## 商品部分

- 直接在goods组件中get到goods数据

  ```vue
  data(){
  	return {goods:{}};
  },
  created(){
  	this.$http.get('/api/goods').then(function(response){
  		let dataJson = parse.JSON(response.bodyText);
  		if(dataJson.error === 1){
  			this.goods = dataJson.data;
  		}
  	})
  }
  ```


- 写页面

## better-scroll

- #### 写入package.json

  ```
  "better-scroll": "^1.13.2"
  ```

- #### npm install 进行安装

- #### scroll

  ```vue
  //goods.vue
  <template>
  	<div class="menu-wrapper" rel="menu">...</div>
  	<div class="foods-wrapper" rel="foods">...</div>
  </template>
  
  <script>
  import BScroll from "better-scroll";  //引入
      export default{
          methods:{
              _initScroll(){
                  this.menuScroll = new BScroll(this.$rels.menu,{});//传入需要scroll的节点
                  this.foodsScroll = new BScroll(this.$rels.foods,{});
              }
          },
          created(){
              this.$http.get('/api/goods').then(
          	(response) => {
            		let dataJson = JSON.parse(response.bodyText);
            		if(dataJson.error === ERR_OK){
             		 	this.goods = dataJson.data;
                      //要在$nextTick里调用（等待页面渲染完后调用）
              		this.$nextTick(() => {this._initScroll()});
            		}
          	}
          }
      }
  </script>
  
  ```

  **注意**：

  ```html
  //better-scroll  html的嵌套标签是定的，不然会出问题
  <div>
      <ul>
          <li></li>
          ...
      </ul>
  </div>
  ```

- #### 左右联动

  >  ##### 效果：
  >
  >  右侧滑动foods左侧对应的menu实现高亮
  >
  >  ##### 思路：
  >
  >  - better-scroll提供了api可以绑定scroll事件，实时获取**滑动的距离**
  >
  >    ````js
  >    //goods.vue
  >    data(){
  >        return {
  >            scrollY:0
  >            ...
  >        }
  >    }
  >    methods:{
  >       _initScroll(){
  >           this.menuScroll = new BScroll(this.$rels.menu,{
  >               click:true  //不加，移动端的点击事件会有问题
  >           });
  >           this.foodsScroll = new BScroll(this.$rels.foods,{
  >               click:true, //不加，移动端的点击事件会有问题
  >               probeType:3 //探针效果，相当于声明可以在this.foodsScroll上绑定scroll事件
  >           });
  >    	   //绑定scroll事件，获取默认参数的y值（y方向滑动的距离）
  >           this.foodsScroll.on('scroll',(pos) => {
  >               this.scrollY = Math.abs(Math.round(pos.y));
  >           })
  >       }
  >    }
  >    ````
  >
  >
  >  - 获取右侧每一块foods的高度---->累加----->获得每一块相对屏幕的高度----->记录在数组listHeight里 
  >
  >    ````js
  >    data(){
  >        return {
  >            listHeight:[];
  >            ...
  >        }
  >    },
  >    methods:{
  >        ...
  >        _calculateHeight(){
  >            //获取每一块foods的节点
  >            let foodList=this.$refs.foods.getElementsByClassName('foods-list-hook');
  >            this.listHeight.push(0);
  >            for(let i=0;i<foodList.length;i++){
  >                //将每次需要滑动的高度push到listHeight里
  >                this.listHeight.push(this.listHeight[i]+foodList[i]);
  >            }
  >        }
  >    },
  >        created(){
  >            ...
  >            this.$nextTick(()=>{
  >                _initScroll();
  >                _calculateHeight();//调用
  >            })
  >        }
  >    ````
  >
  >  - 通过计算属性来判断，滑动的高度在高度数组里范围的index,返回index，判断与li对应的index是否相等，相等的话挂class
  >
  >    ```html
  >    <ul>
  >      <li v-for="(item,index) in goods" class="menu-name" :class="{'current':currentIndex===index}">
  >        <p><span :class="setTypeStyle(item)"></span>{{item.name}}</p>
  >      </li>
  >    </ul>
  >    ```
  >
  >    ```js
  >    //goods.vue
  >    computed:{
  >        currentIndex(){
  >            for(let i=0;i<this.listHeight.length;i++){
  >                let height1 = listHeight[i];
  >                let height2 = listHeight[i+1];
  >                if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
  >                    return i;
  >                }
  >            }
  >            return 0;
  >        }
  >    }
  >    ```
  >
  >    ```css
  >    .currentIndex {
  >        background-color:#fff;
  >        font-weight:500;
  >    }
  >    ```
  >
  >  - 点击menu滚动foods到相应位置
  >
  >    ```html
  >    <li v-for="(item,index) in goods" class="menu-name" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
  >    </li>
  >    ```
  >
  >    `````js
  >    methods:{
  >        selectMenu(index,event){
  >            if(!event._constructed){
  >              return;  //阻止pc端点击弹两次
  >            }
  >            let foodList = this.$refs.foods.getElementsByClassName('foods-list-hook');
  >            let el = foodList[index];
  >            this.foodsScroll.scrollToElement(el,300);
  >        }
  >    }
  >    `````
  >

### $nextTick

> $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM



## 购物车部分



## cartControl部分

> 添加 减少商品部分，单独分为一个组件



## selectFoods通信问题

- ### 涉及的组件

  > - cartControl.vue
  >
  >   直接控制选择的食物
  >
  > - goods.vue
  >
  >   cartControl的父组件
  >
  >   将selectFoods数据传递给shopcart组件
  >
  > - shopcart.vue
  >
  >   接收selectFoods数据，动态显示

- ### 利用空实例

  ```````````js
  //@src/common/js/busVM.js
  import Vue from 'vue'
  export default new Vue();
  ```````````

  ``````js
  //cartControl.vue
  import BusVM from "...../busVM"
  data(){
      return {count:0}
  },
  methods:{
      addClick(){
          if(!foods.count){
              this.$set(foods,'count',1);
          } else {
            	this.foods.count++;  
          }
          //利用set更新对象，视图的更新还是有问题，这里用this.count进行赋值替代
          this.count = this.foods.count;
          //this.foods是父组件goods传下来的，每一个食物的对象
          BusVM.$emit('newFood',this.foods);
      }
  }
  ``````

  ````js
  //goods.vue
  import BusVM from "...../busVM"
  data(){
      return {selectFoods:[]}
  },
  created(){
      BusVM.$on('newFood',(newFood)=>{
          //进行判断newFood对象是否已经存在于selectFoods对象中,已经存在的，cartControl组件中进行改变foods.count，会改变数组里对象的count属性
          if(this.selectFoods.indexOf(newFood)===-1){
              this.selectFoods.splice(this.selectFoods.length,1,newFood);
          }
      })
  }
  ````


## 添加商品   小球的动画

## 购物车具体选择的商品



