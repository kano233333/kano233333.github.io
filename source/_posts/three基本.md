---
title: three基本
date: 2019-02-04 15:40:36
tags: 
  - threejs
---

threejs 嘿嘿嘿

<!--more-->

# 引入

> <a href="https://github.com/mrdoob/three.js/tree/dev/build">three.js</a>

# 基本组成

- ## 场景

  `````js
  var scene = new THREE.Scene();
  `````

  > 图形最后全部通过add()函数展示到场景上。

- ## 摄像机

  ``````js
  var camera = new THREE.PerspectiveCamera(a,b,c,d);
  ``````

  > PerspectiveCamera(透视摄像机)
  >
  > a : 视野角度
  >
  > b : 长宽比
  >
  > c : 远剪切面
  >
  > d : 近剪切面

- ## 渲染器

  ```````js
  var renderer = new THREE.WebGLRenderer();
  //设置渲染器大小
  renderer.serSize(width,height);
  ```````

  > 最后渲染器使用canvas标签展示到场景上

# 图形

- ## 创建

  `````js
  var cubeGeometry = new THREE.BoxGeometry(x,y,z);
  `````

- ## 材质

  ``````js
  var cubeMaterial = new THREE.MeshBasicMaterial({
      //设置属性
      color:xxx
  })
  ``````

- ## 网格

  ```js
  var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
  ```

  > 包含一个几何体和几何体材质的对象

- ## 位置

  ````````js
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  ````````

  > 设置几何图形的位置，默认（0，0，0）

- ## 动画

  ````js
  var animate = function(){
    requestAnimationFrame(animate);
    ...
    //旋转
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    //移动
    cube.position....
  }
  animate();
  ````

  > 通过**requestAnimationFrame**来计时

- ## 添加

  `````js
  scene.add(cube);
  `````

  > 将图形添加到场景上