# About
## 技术栈

nodejs + express + mongodb + mongoose + es6/7 + react + material-ui


## 项目参考
后台项目参考了@bailicangdu大佬的项目 
https://github.com/bailicangdu/node-elm

## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node (6.0 及以上版本)
2、mongodb (开启状态)
3、GraphicsMagick (裁切图片)
```

```
git clone https://github.com/bailicangdu/node-elm  

cd node-elm

npm install 或 yarn(推荐)

npm run dev

访问: http://localhost:8001（如果已启动前台程序，则不需打开此地址）

```


## 项目布局

```
.
├── InitData                        初始化数据
├── config                          运行配置
│   ├── default.js                  默认配置
│   └── development.js              开发环境
├── controller                      处理中心，负责路由及数据库的具体操作
│   ├── admin
│   │   └── admin.js                管理员
├── logs                            日志文件
├── middlewares                     中间件
│   ├── check.js                    权限验证    
│   └── statistic.js                API数据统计
├── models                          模型(数据库)
│   ├── admin
│   │   └── admin.js                管理员模型
├── mongodb                         连接数据库
│   └── db.js
├── prototype                       基础功能Class
│   ├── addressComponent.js         与腾讯、百度地图API相关的Class
│   └── baseComponent.js            底层类
├── public                          静态资源目录
├── routes                          路由配置
│   ├── admin.js                    管理员
├── views   
├── .babelrc 
├── .gitignore
├── API.md                          接口文档
├── app.js                          基础配置
├── COPYING                         GPL协议
├── index.js                        入口文件
├── package.json
├── README.md                  
.


```
