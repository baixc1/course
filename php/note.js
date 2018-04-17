Hypertext Preprocessor
1、服务器端脚本
2、运行：服务器组件（WampServer, XAMPP）
3、IDE （Eclipse for PHP）
4、语法
	<?php代码?>
	输出指令: echo(可输出任意个字符串), print(输出一个字符串,返回1)
	.号: 连接符
	解析双引号内的php变量
5、	变量: $变量名
	弱类型
	变量作用域: local, global($GLOBAL[index]), static, parameter
6、定界符EOF: 定义字串方法
7、数据类型: 
	String, Integer, Float, Boolean, Array, Object(声明), NULL
	var_dump(): 返回类型、长度和值
8、常量
	define();
9、字符串
	并置运算符.
	strlen();
	strpos();
10、array()
	数值数组、关联数组array(''=>'',..)、多维数组
	count()
	for循环, foreach(arr as val)循环
	
11、数组排序
	sort,rsort,asort,ksort,arsort,krsort
	print_r: 打印数组
12、超级全局变量
	superglobals($GLOBAL, $_SREVER, $_REQUEST, $_POST, $_GET)
13、魔术变量
	__LINE__, 
	__FILE__: 文件的完整路径和文件名
	, __DIR__, __FUNCTION__, __CLASS__, __METHOD__, __NAMESPACE__
14、命名空间
	namespace xx\xxx
	作用: 1、类、函数、常量名字冲突 2、提供别名, 提高代码可读性
	use class 引入类库
15、对象
	父类(基类,超类),子类(派生类) 
	class phpClass{
		var $x = 1;
		public function __construct(){}
		function fun(){}
	}
	类成员访问 ->
	继承 extends
	访问控制 public, protected, private
	接口 interface, 实现接口 class className implements interfaceName
	抽象类 abstract 子类继承
	static
	final
16、函数
	define();		//定义常量



advanced course
1、PHP包含
	include,require(错误中断) : 引用页头、公用文件、变量
	
reference manual
1、dirpath() 返回目录路径	
	
	