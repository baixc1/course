项目
1、浏览器错误乱码: echo iconv('gbk', 'utf-8', $e->getMessage());
2、服务器项目打开报错: 
		\kilimanjaro\.htaccess RewriteRule才能在localhost看到文件
		failed to open stream  	index.php 开启调试模式 或 删除data\runtime\common~runtime.php配置文件(删除后会自动生成新文件,且配置路径正确, 调试模式下无该文件)
		Access denied for user 'root'@'localhost'   data/conf/db.php 修改DB_PWD,DB_NAME 刷新页面
		data/runtime/Logs/Portal/.log   错误日志
		php打印log: file_put_contents('文件根目录',"",[FILE_APPEND]);
					file_get_contents	读取文件内容
3、mysql打不开(服务名无效): mysqld --install
4、	F方法 读/写缓存 
	C方法 读/写配置   
	M方法  实例化一个基础模型类
	E方法 	抛出异常处理, 中止程序
	L方法  获取和设置语言定义(不区分大小写)
	
5、->join()->where()->order()->limit()->select() 	数据库操作
6、链接导向流程 
	index.php(入口文件) -> 
	Core/ThinkPHP.php(框架核心入口文件) -> 
	Core/Library/Think/Think.class.php(引导类) ->
	同上/App.class.php(启动类,创建控制器实例-new class) ->
	...
	

	a)引导类 Think\Think::start()
	b)启动类 Think\App::run();
	c)方法   Think\App\exec
	d)url请求Think\Dispatcher

	\data\conf\config.php   URL_MODEL值为0   叫做普通模式。如：http://localhost/index.php?m=模块&a=方法
	.htaccess文件  rewrite规则隐藏掉index.php，生成：http://localhost/模块/方法
					访问^test.html$ index.php/?m=page&a=index&id=1000 等价于(重定向)  localhost(网站)/index.php(主页入口)/page(控制器)/index(方法)/id(参数)/1000(值)
	访问链接, 调用对应的控制器方法, 可传参  
	实例化控制器 controller函数		thinkphp\Core\Common\functions.php  new 控制器();
7、自定义标签模板
	新建自定义标签类, 继承Think\Template\TagLib
8、数组越界报错解决 isset($arr[key])
9、thinkphp中, .= 左值未定义会报错, 但是不影响程序的执行


***配置***
c(load_config(conf.php)) 	获取和设置配置参数   设置static $_config



***函数***
load_config 加载配置文件 
array_merge	数字合并
file_exists_case 区分大小写的文件存在判断

***模型***

*模板*
变量输出: 控制器中赋值, 在模板中使用.常量直接使用
	$this->display();输出模板文件
		默认参数: TPL/模板默认主题/默认模块名/操作名+模板后缀
		继承调用, 子类可重载该方法
	$this->assign('name',$val);模板变量赋值
	index控制器模块获取数据