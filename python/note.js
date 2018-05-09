Python 2.0
1、默认ascii编码,转中文编码: # coding=utf-8 
2、基础语法：
	交互式编程、脚本式编程、标识符、保留字符、行和缩进、多行语句(\)、引号、注释(#,'''/""")、空行、输出、代码组
	缩进要相同		//notepad++ 查看缩进: 视图-显示符号-显示空格与制表符
	python2.7:	基于ASCII处理, 字符写入文件要加上以下内容, 
				import sys
				reload(sys)		//防止module报错
				sys.setdefaultencoding('utf-8')
	print输出:	cmd默认gbk,pycharm不同 //eg: str.encode("gbk")
	删除写入Txt文件: 先关闭pycharm中的进程
3、变量类型：
			Number、
			String([x,y]/+/*)
				方法
					rfind(str, beg, end)		return -1/最后出现的位置
			List、Tuple、Dictionary,(对象)  布尔值(True/False)   
			数据类型转换
			global a 	//全局函数声明
			
4、运算符	算术*、比较*、赋值*、位*、逻辑*、成员*(in)、身份*(is)、优先级
5、条件语句
	if 判断条件：
		执行语句……
	elif 判断条件2:
		执行语句2……
	else：
		执行语句……
	循环语句(while/for)
	break/continue/pass空语句
6、Number	类型(Int/long integers/floating/complex)	类型转换  	math/cmath模块	随机数函数...
7、字符串	访问值、更新、转义字符、运算符、格式化、
			内建函数
				string.strip()		//去首尾空格
				find/rfind(str,beg,end)		//字符串未知
			换行 '\n'	eg: 'a\na'
8、列表		访问、更新(append/del)、操作符(len/+/*/in)、函数(cmp/len/max/min/list)/方法(append/count/extend/index...)
9、元组		访问、修改(组合)、删除、运算符、内置函数(cmp/len/max/min/tuple)
10、字典	访问(['key'])、修改、删除、键特征(覆盖/不可改)、内置函数(cmp/len/str)、方法(clear/copy...)
11、日期和时间	格式化时间元组(time.asctime( time.localtime(time.time()) ))  格式化(%y/m/...) 	日历(模块函数)	Time模块内置函数(time.fn)
12、函数	定义(def : 缩进)	参数(指针/(不)可变类型)(必备*/关键字*/缺省*/不定长*)	匿名函数(lambda表达式)  	return语句		作用域
13、模块(Module)	import语句  from...import(*)...as	搜索路径(当前->shell->default)(sys.path)	PYTHONPATH环境变量	
					命名空间和作用域(同一个作用域的一个变量不可能一会儿是全局变量一会儿是局部变量) 	函数(dir/globals/locals)  	包(__init__.py)(package.sub)
		模块帮助:	help(module.instruction)			
		time:	
			time.time()		//秒		
			time.sleep()	//延迟输出
		json
		BeautifulSoup	
		os					//文件/目录
			os.path.isfile
			os.system		//执行shell命令
			os.open(file,flags)		//eg: flags: os.O_RDWR|os.O_CREAT
		urllib2.urlopen(url)				//url操作
14、IDE		pycharm-community
15、异常处理	//try/except Exception, Arg/else/finally
16、调试
	logging		
		a、import logging 
		b、logging.info()
	pycharm				
17、内置函数
	open(name[, mode])		//打开文件, 返回file对象, mode: eg: w
		file对象方法: wirte/read/close()
	int()					//向下取整
	str()					//转为字符串
	reload()				//重新载入模块
	range/xrange(start,end,step)	//创建列表/生成器, 取头不取尾
	type()					//一个参数时返回对象类型
18、爬虫
	基本流程		
		a、request	
				请求头: User-agent、cookie、Referrer
				请求体: get/post
		b、response
				状态码
				header
				preview
		c、parse	
				html-RE模块, json, 二进制数据: wb
		d、save
		
		
		
		
***高级教程***
1、正则表达式
	re模块
	?P		//子组取名
	re.match(pat,str,fgs)	
		pattern中 r"" - 表示原生字符串
		返回匹配对象或None  
		group(num)字符串-总-子, groups()元组-子
		和match比: 只匹配开始
	re.search(pat,str,fgs)
	re.sub(pat,repl,str,count)
		检索和替换
		rep1//需要替换的字符