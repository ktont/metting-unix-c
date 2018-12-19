# 技术分享 -- C 栈帧和 UNIX 进程切换

node 版本大于等于 v8.4.0

```
npm install
或者
npm install chalk

node main.js
```

## 目录

1. 封面 关于 banner 命令
2. 引子 chmod 777 命令开启系统大门
3. 栈帧 -- 什么是函数？
4. 一个例子：编写一个 tiny 操作系统用来跑一个函数
5. 无法记忆的系统调用fork
6. 一个例子：修改栈帧用来模拟进程切换
7. 虚拟内存（如果有时间可能会讲讲）
8. 进程 image 和一张图看清内存（如果做出来一个web再讲）


