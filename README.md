## ReadMe

data capturer v.1

## 开发环境
node版本： 9.10.0
npm版本：5.6.0
mysql版本：mysql8

## 开发步骤

进入 `frontend` 后执行 `npm run dev` 即可打开dev server
```
   cd frontend && npm install
   npm run dev
```

进入 `nodeserver` 后执行 `npm run dev` 即可打开dev data server
```
   cd nodeserver && npm install
   npm run dev
```
访问开发路径：http://localhost:34567/

## 本地模拟线上环境
```
    cd frontend && npm run generate && cd ..
    cd nodeserver && rm -rf static && mkdir static && cp -r ../frontend/dist/* ./static
    npm run prod
```
线上模拟路径：http://localhost/

## 开发细节和框架
本项目采用前后端分离的方式进行开发，前端在frontend文件夹，后端在nodeserver

### frontend
前端采用nuxt + vue + element ui库 框架进行页面开发，
nuxt 文档地址: https://nuxtjs.org/guide
vue 文档地址：https://cn.vuejs.org/v2/guide/index.html
element ui库地址：https://element.eleme.io/#/zh-CN/component/installation

####comment
src
 -page

### nodeserver
后端采用nodejs + mysql + sequence orm开发，目前有俩套环境：
dev环境下，脚本为npm run dev，链接本地的mysql库。
prod环境下，脚本为npm run prod,连接线上库，具体配置参见model.js

## 发布步骤
在服务器拉下所有代码后：执行以下代码
```
    cd code/tim_data_capturer
    cd frontend && npm run generate && cd ..
    cd nodeserver && rm -rf static && mkdir static && cp -r ../frontend/dist/* ./static
    pm2 restart all
	
	or  pm2 start server.js
```