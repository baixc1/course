thinkphp
1、PHP开发框架
2、github下载think(目录结构)和framework(一级子目录phpthink)
3、入口public/index.php
4、安装php, php think bulid --module demo
5、浏览器错误乱码: echo iconv('gbk', 'utf-8', $e->getMessage());
6、服务器项目打开报错: 
		\kilimanjaro\.htaccess RewriteRule才能在localhost看到文件
		failed to open stream  	index.php 开启调试模式
		Access denied for user 'root'@'localhost'   data/conf/db.php 修改DB_PWD,DB_NAME 刷新页面
		data/runtime/Logs/Portal/.log   错误日志
		php打印log: file_put_contents('文件根目录',"");
7、mysql打不开(服务名无效): mysqld --install