***项目运行***
1、安装pm2
	npm install pm2 -g 
2、安装项目依赖
	npm install
3、启动服务
	pm2 start server.js
4、启动项目
	npm run dev
5、6000端口安全问题
	chrome快捷键-属性- 目标加( --explicitly-allowed-ports=6000)
6、获取页面url
	mounted中, global.location.href