项目
1、浏览器错误乱码: echo iconv('gbk', 'utf-8', $e->getMessage());
2、服务器项目打开报错: 
		\kilimanjaro\.htaccess RewriteRule才能在localhost看到文件
		failed to open stream  	index.php 开启调试模式 或 删除data\runtime\common~runtime.php配置文件(删除后会自动生成新文件,且配置路径正确, 调试模式下无该文件)
		Access denied for user 'root'@'localhost'   data/conf/db.php 修改DB_PWD,DB_NAME 刷新页面
		data/runtime/Logs/Portal/.log   错误日志
3、mysql打不开(服务名无效): mysqld --install
4、->join()->where()->order()->limit()->select() 	数据库操作
5、自定义标签模板
	新建自定义标签类, 继承Think\Template\TagLib
6、数组越界报错解决 isset($arr[key])
7、thinkphp中, .= 左值未定义会报错, 但是不影响程序的执行




***页面加载***
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






***html模板引擎初始化***
入口文件
	require()

Think\Think
	start()

Think\App
	run() -> exec() -> invokeAction() 
	
ReflectionMethod
	invoke()
	
application页面控制器(入口)
	index()

application公用(common)控制器
	display()
	
Think\Controller
	display()
	
Think\View
	display()
	fetch()
	
Think\Hook
	listen()监听标签的插件
	exec()执行某个插件
	
Behavior\ParseTemplateBehavior
	run()系统行为扩展: 模板解析

Think\Template类
	fetch()加载模板 -> loadTemplate()加载主模板 -> 
	compiler()编译模板文件(页面)内容 -> parse()模板解析入口 -> 
	parseTagLib()解析标签库 ##include## -> preg_replace_callback() ##head## -> parseXmlTag()

核心TagLib的子类 		
	include() 模板语法糖解析为php语法, 一次一个解析单个模板引擎
	a、计算引擎路径
	b、获取引擎内容
	c、解析模板内容(可缓存) 	$this->tpl->parse($content)






***调试***
1、打印log: 				file_put_contents('log',"",FILE_APPEND);
							file_get_contents	读取文件内容
2、页面输出类型和值			dump($var);		打印类型-值
3、页面Trace				入口文件定义define('APP_DEBUG', true), 开启调试模式
							默认的调试模式配置文件	//Conf\debug.php
							trace(); 数组有特殊标志, false 不打印, true 打印1		//debug panel
4、模型调试(mysql执行语句)  echo $var->getLastSql();	
5、跟踪调试					$backtrace = debug_backtrace();	// 函数调用栈
 


***配置***
c(load_config(conf.php)) 	获取和设置配置参数   设置static $_config
标签库配置 Conf/config.php	'TAGLIB_BUILD_IN' =>'Cx,...', //Cx为核心标签库名称


***内置常量***
__FILE__	: 该文件路径
__LINE__	: 该代码所在行数



***函数***
load_config 		//加载配置文件 
array_merge			//数字合并
file_exists_case 	//区分大小写的文件存在判断
ini_get($str)				//获取配置值
preg_replace_callback($pattern,fn,$subject);	//正则匹配替换

F方法 读/写缓存 
C方法 读/写配置   
M方法  实例化一个基础模型类
E方法 	抛出异常处理, 中止程序
L方法  获取和设置语言定义(不区分大小写)




***模型***

*模板*
变量输出: 控制器中赋值, 在模板中使用.常量直接使用
	$this->display();输出模板文件
		默认参数: TPL/模板默认主题/默认模块名/操作名+模板后缀
		继承调用, 子类可重载该方法
	$this->assign('name',$val);模板变量赋值
	index控制器模块获取数据
	
	
*连贯操作*
1、实例化对象	M();指定表名
2、查询条件: 字符串、数组(高效)、对象
3、find/select	find有 LIMIT 1 限制
4、limit(m,n)	从m开始取n条数据
5、order(r1,r2)	优先级(asc,desc) 高->低
6、join('.. AS a ON a.x=before.x')	多表查询
7、whree(a = x AND b=xx) a,b 为before的key  or(a like 'xxx_%')
M('mode').join().where().order().limit().select/find();
	
	
	
	
	
	
	
	
	