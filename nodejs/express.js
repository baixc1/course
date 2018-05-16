***nodejs搭建web服务器***
1、基于v8的js运行环境, node命令执行js脚本		//node test.js
2、引用express模块并执行						//app = express();
3、监听ip、端口										//app.listen('');
4、app.get/post(path, function(req,res) {})			//接收请求, 处理响应逻辑
	res.send()			//响应数据
	res.header('Access-Control-Allow-Origin', '*');		//服务器允许跨域请求