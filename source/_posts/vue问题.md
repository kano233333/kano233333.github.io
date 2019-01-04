---
title: vue问题
tags:
---
## Array  Object  更新后，DOM不能实时渲染

- ### 现象

  ```html
  <style>
      isActive:{
          height:10px;
          background-color:red;
      }
  </style>
  <div>
      <div v-for="item in list" :class="isActive:item.active" @click="itemClick(item)"></div>
  </div>
  
  <script>
  new Vue({
      data:{
          list:[
              {name:'a'},
              {name:'b'},
              {name:'c'}
          ]
      },
  	methods:{
  		itemClick(item){
  			item.active = !item.active;
  		}
  	},
  	created(){
  		for(let i=0;i<this.list.length;i++){
              this.list[i].active = false;                    
  		}
  	}
  })
  </script>
  ```

  > created里对list对象添加active属性
  >
  > 点击div触发 itemClick事件 ---->  改变list对象里的active  ----->  添加isActive的class
  >
  >  
  >
  > 然而。。。
  >
  > 并没有用

- ### 针对以上情况解决

  - #### 对象里面存在需要添加的属性

  ```js
  new Vue({
      data:{
          list:[
              {name:'a',active:false},
              {name:'b',active:false},
              {name:'c',active:false}
          ]
      },
  	methods:{
  		itemClick(item){
  			item.active = !item.active;
  		}
  	}
  })
  ```

  > 直接在list对象里添加属性active

  - #### 使用 $set

  ````
  obj.active = false;
  ===>
  this.$set(obj,'active',false); 
  ````

- ### 造成原因

  > 数据的改变必须能够触发set方法，否则无法响应数据变化
  >
  > <a href="https://blog.csdn.net/zifeiyu130/article/details/78950244?utm_source=blogxgwz1" style="text-decoration:none;">详情</a>



## 路由使用父组件的属性

在router-view标签里进行传递

````````html
<router-view :xxx="xxx"></router-view>
````````

