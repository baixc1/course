项目
1、浏览器错误乱码: echo iconv('gbk', 'utf-8', $e->getMessage());
2、服务器项目打开报错: 
		\kilimanjaro\.htaccess RewriteRule才能在localhost看到文件
		failed to open stream  	index.php 开启调试模式
		Access denied for user 'root'@'localhost'   data/conf/db.php 修改DB_PWD,DB_NAME 刷新页面
		data/runtime/Logs/Portal/.log   错误日志
		php打印log: file_put_contents('文件根目录',"",[FILE_APPEND]);
					file_get_contents	读取文件内容
3、mysql打不开(服务名无效): mysqld --install
4、 导航栏模板: themes\bqmmfal_mobile\Common
	全局函数: application\Common\Common
5、F方法 读/写缓存 C方法 读取配置   M方法  实例化一个基础模型类
6、	tree类  simplewind\Lib\Util
	html模板类 simplewind\Core\Library\Think\Template
7、->join()->where()->order()->limit()->select() 	数据库操作





***模型***

*模板*
变量输出: 控制器中赋值, 在模板中使用.常量直接使用
	$this->display();输出模板文件
	$this->assign('name',$val);模板变量赋值
	index控制器模块获取数据