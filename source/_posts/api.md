---
title: 2018.10.2
tags: 
  - api
---
### 统一

#### type

``````json
// 中文 : type
{
    "推荐":"recommend",
    "热点":"hot",
    "科技":"tech",
    "娱乐":"entertainment",
    "游戏":"game",
    "体育":"sports",
    "汽车":"car",
    "财经":"finance",
    "搞笑":"funny",
    "军事":"military",
    "国际":"world",
    "旅游":"travel",
    "历史":"history",
    "养生":"regimen",
    "美文":"essay",
    "探索":"discovery",
    "育儿":"baby",
    "其他":"other"
}
``````



### 天气

```````json
//POST  /getWeather
{
    city:'', //城市
    county:''//县
}
```````

return

````````json
//（默认北京）
{
    today:{ //今天
        temp:[],//温度，两个数字（[x,y]:x~y度）
        wind:'',//风级('东风二级')    
        air:''//空气指数（数字）
    },
    tomorrow:{ //明天
        temp:[]//温度
    },
    afterTwoDay:{ //后天
        temp:[]//温度
    }
}
````````



### 用户

- #### 登录

  ```json
  //POST  /userSignIn
  {
      username:'',//用户邮箱
      passwd:''//密码
  }
  ```

  return

  `````json
  //用户名不存在
  {
      static:-1
  }
  //密码错误
  {
      static:0
  }
  //登录成功
  {
      static:1，
      imgUrl:'', //头像图片url
      follow:'', //关注数
      fans:'', //粉丝数
      uid:''
  }
  `````

- #### 退出登录

  ``````json
  //   /userLogout
  {
      uid:''
  }
  ``````

  return

  ```````json
  //退出失败
  {
      staic:0
  }
  //退出成功
  {
  	static:1
  }
  ```````

- #### 关注用户

  `````json
  //POST  /userFollow
  {
      uid:'', //用户邮箱
      followUsername:''//关注的邮箱
  }
  `````

  return

  ````json
  //关注失败
  {
      static:0
  }
  //关注成功
  {
      static:1
  }
  ````

- #### 取消关注

  ``````json
  //POST  /userRemoveFollow
  {
      uid:'', //用户id
      followUsername:''//取消关注的邮箱
  }
  ``````

  return

  `````json
  //关注失败
  {
      static:0
  }
  //关注成功
  {
      static:1
  }
  `````

- #### 关注的人的列表

  ````````json
  //POST  /getFollows
  {
      username:'' //用户邮箱
  }
  ````````

  return 

  `````````json
  {
      data:[
          {
              username:'', //关注的人邮箱
              imgUrl:'' //头像
          }，
          ...
      ]
  }
  `````````

- #### 粉丝列表

  ``````json
  //POST  /getfans
  {
      username:'' //用户邮箱
  }
  ``````

  return

  ```json
  {
      data:[
          {
              username:'', //关注的人的邮箱
              imgUrl:'' //头像
          }，
          ...
      ]
  }
  ```

- #### 发表文章

  ```json
  //POST  /userPublishArticle
  {
      content:'', //文章内容
      uid:''//用户名
  }
  ```

  return

  `````json
  //发表失败
  {
      static:0
  }
  //发表成功
  {
      static:1
  }
  `````


- #### 获取微头条的列表

  ``````````json
  //GET /getPulishList
  {
      username:''
  }
  ``````````

  return

  ````````json
  {
      data:[
          {
              id:'',//文章id
              title:'',//文章标题
              readNum:'',//阅读数
              zanNum:'',//点赞数
              recommendNum:'',//评论数
              contentUrl:'',//图片的url
              time:''//发表时间
          }
          ...
      ]
  }
  ````````

- #### 获取评论的列表

  ``````````json
  {
      username:''
  }
  ``````````

  return

  `````````````json
  {
      data:[
          {
              id:'',//文章id
              title:'',//文章标题
              readNum:'',//阅读数
              zanNum:'',//点赞数
              recommendNum:'',//评论数
              contentUrl:'',//图片的url
              time:'',//评论时间
              content:''//评论的内容
          }
      ]
  }
  `````````````

  

- #### 删除发布/评论

  `````````json
  //POST /deletePulished
  {
      type:'' //type:0（删除微头条）  type:1（删除评论）
      uid:'',//用户id
      id:''//文章id
  }
  `````````

  return

  ````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  ````

  

- #### 收藏列表

  ``````json
  //POST  /getStartList
  {
      username:'' //用户邮箱
  }
  ``````

  return

  ``````json
  {
      data:[
          {
              id:'',//文章id
              title:'',//文章标题
              time:'',//收藏时间
              readNum:'',//阅读数
              commentNum:''//评论数目
          }
      ]
  }
  ``````

  

### 搜索

- 搜索文章

````````json
 // GET  /searchComprehensiveData?keyWord=''
{
    keyWord:''//搜索内容
}
````````

return

```````````json
{
    data:[ 
        {
            id:'', //文章id
            title:'',//标题
            author:'',//作者
            recommendNum:'',//评论数（数字）
            time:'',//时间
            contentUrl:'',//图片的url（有的是视频）
        },
        ...
    ]
}
```````````

- 搜索用户

````````json
 // GET  /searchUserDate?keyWord=''
{
    keyWord:''//搜索内容
}
````````

return 

``````json
{
    data:[ 
        {
            username:'', //用户名
            imgUrl:'', //头像
            motto:'' //用户格言
        }
    ]
}
``````



### 文章

- #### 首页轮播

  ```json
  //   /slideArticle
  {
      data:[
          {
              id:'',//
              title:'',//文章标题
              imgUrl:''，//图片
              type:''//文章类型
          },
          ...//6个
      ]
  }
  ```

- #### 24小时热新闻

  `````json
  //   /hotArticle
  {
      data:[
          {
              title:'',//文章标题
              imgUrl:''，//图片
              id:'', //文章id
          }
      ]
  }
  `````


- #### 推荐 （比其他要多回传一个**文章类型**的参数）

  ``````json
  //   /getReommendArticle
  {
      page:''
  }
  ``````

  return

  `````json
  {
      data:[
          {
              id:'', //文章id
              title:'',//标题
              uid:'',//作者id
              author:'',//作者
              recommendNum:'',//评论数
              time:'',//时间
              contentUrl:'',//图片的url（有的是视频）
              type:'' //文章类型（'hot'）
          },
          ...
      ]
  }
  `````

- #### 其他的

  ```````````json
  //POST   /getArticle
  {
      type:''//文章类型(最上面 统一 对应的type)
      page:''
  }
  ```````````

  return 

  ````json
  {
      data:[
          {
              id:'', //文章id
              title:'',//标题
              uid:'',//作者id
              author:'',//作者
              recommendNum:'',//评论数
              time:'',//时间 ('10分钟')
              contentUrl:'',//图片的url（有的是视频）
          }
      ]
  }
  ````

- #### 收藏文章

  `````````json
  //POST /startArticle
  {
      uid:'',//用户id
      id:''//文章id
  }
  `````````

  return

  `````````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  `````````

- #### 取消收藏

  ```````````json
  //POST /removeStartArticle
  {
     uid:'',//用户id
     id:''//文章id
  }
  ```````````

  return

  ``````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  ``````

- #### 举报文章

  ```````````json
  //POST /reportArticle
  {
      uid:'',//用户id
      id:''//文章id
  }
  ```````````

  return 

  ```````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  ```````

### 文章详情

``````json
//POST  /articleDetail
{
    id:'' //文章id
}
``````

return

``````json
{
    content:''， //文章内容
    pulishTime:'',//发表时间
    isStart:''，//用户是否收藏（0：否，1：是）
    pulishMan:''//发表人
}
``````



### 评论

- #### 获取评论

  ``````json
  //POST  /getComments
  {
  	id:'', //文章id
      page:'' //评论页码（一页5个评论）
  }
  ``````

  return 

  ``````json
  {
      data:[
          {
              mid:'',//评论人的id
              username:'', //评论人的名字
              imgUrl:'', //头像
              content:'', //评论内容
              replyNum:'', //回复数（数字）
              time:''，//评论时间
              zan:'',//点赞数（数字）
              cid:'',//评论的id
          },
          ...//5个
      ]
  }
  ``````

- #### 发表评论

  `````json
  //POST  /publishComment
  {
      uid:'',//用户id
      id:'',//文章id
      time:''//发表时间
  }
  `````

  return

  ``````json
  //发表失败
  {
      static:0
  }
  //发表成功
  {
      static:1
  }
  ``````

- #### 发表回复

  ````````json
  //POST  /replyComment
  {
      uid:'',//用户id
      mid:'',//回复的人的id
      cid:'',//回复的那条评论的id
      rid:'',//回复的id
      content:''//回复的内容
  }
  ````````

  return

  `````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  `````

- #### 查看回复

  ````json
  //POST  /replyDatail
  {
      id:'',//文章的id
      cid:''，//评论的id
      page:'' //评论页码（一页5个评论）
  }
  ````

  return

  `````````json
  {
      data:[
              {
                  mid:"",//评论人的id
                  username:'', //评论人
                  imgUrl:'', //头像
                  content:'', //评论内容
                  time:''，//评论时间
                  zan:'',//点赞数（数字）
                  from:'',//回复的用户名
                  rid:''//回复的id
          	},
          	...//5个
      	]
  }
  `````````

  

- #### 点赞(评论id和回复id只传一个，另一个为 '' )

  `````````json
  //POST /dianZanComment
  {
      id:'',//文章的id
      cid:'',//评论的id 
      rid:''//回复的id
  }
  `````````

  return

  `````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  `````

- #### 举报

  `````````json
  //POST  /reportComment
  {
      id:'',//文章的id
      cid:''，//评论的id
  }
  `````````

  return

  `````json
  //失败
  {
      static:0
  }
  //成功
  {
      static:1
  }
  `````

### 注册

- #### 发送邮件

`````json
//  /userRegisterSendEmail
{
    email:'' //邮箱
}
`````

return

``````````json
//发送失败
{
    static:0
}
//发送成功
{
    static:1
}
``````````

- #### 验证

``````json
//  /userRegisterTest
{
    auth_code:'' //验证码
    email:'',
    passwd:''
}
``````

return

```````json
//验证码不对
{
    static:-1
}
//验证码失效
{
    static:0
}
//成功
{
    static:1
}
```````
