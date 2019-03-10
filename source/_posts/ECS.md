---
title: ECS
date: 2019-03-05 16:32:46
tags: 
  - server
---

# 软件

## xftp

## putty

# 连接

> 用putty连接

# 安装

## node

- 下载 

`````````
wget https://nodejs.org/dist/v10.11.0/node-v10.11.0-linux-x64.tar.xz
tar xf  node-v10.11.0-linux-x64.tar.xz
`````````

- 软连接

```
sudo ln -s  /home/root/node-v10.11.0-linux-x64/bin/node  /usr/local/bin/
sudo ln -s /home/root/node-v10.11.0-linux-x64/bin/node  /usr/local/bin/
```

## node 模块

> npm 全局安装的包，全部要进行软连接

```
npm install xxx
sudo ln -s /usr/local/node-v8.9.3-linux-x64/lib/node_modules/xxx/bin/xxx 
/usr/local/bin/
```

## git

- 安装

`````
sudo apt-get update
sudo apt-get install git
`````

- 配置

```
git config --global user.email youEmail
```

> 会在用户目录`~/.ssh/`下建立相应的密钥文件

```
ssh-keygen -C 'you email address@gmail.com' -t rsa
```

https://www.cnblogs.com/lxm20145215----/p/5905765.html

```
git pull origin master || webhooks
```

## [pm2](https://www.cnblogs.com/zzsdream/p/6898974.html)

- 启动

  ```
  pm2 start xx.js
  ```

  ```
  pm2 start ./bin/www  
  ```

  [自己配置](https://www.cnblogs.com/zzsdream/p/6898974.html)

  ```
  npm run pm2
  ```

# 安全组

> 无法访问，考虑设置安全组
>
> 指定端口号范围

# 运行

- node

> pm2 start xxx

