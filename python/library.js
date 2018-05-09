*Beautiful Soup库
1、功能			//从网页抓取数据
2、安装			//BS4、lxml/html5lib(解析器)
3、导入
	from bs4 import BeautifulSoup
	soup = BeautifulSoup(html,'html.parser/lxml/html5lib',from_encodeing='utf-8')
	soup.$var(title.name/string/../p/html属性)
4、四大对象
	Tag					//name,attrs
	NavigableString		//string
	BeautifulSoup
	Comment				//bs4.element.Comment
5、遍历文档树
	直接子节点			//contents、children
	子孙节点			//decendants
	节点内容
	...
6、搜索文档树
	过滤器				//字符串、正则(re.compile())(match匹配)、列表、True、方法
	find(name, attrs, ...)		
	find_all('a')
	get('href')
7、css选择器



*uiautomator		Android自动化测试框架(UI测试)
1、pip install uiautomator
2、from uiautomator import device as d


*Requests
1、发送请求
	r = requests.get/post...(url,header,params...)			//return response object
2、传递url参数
	params = {}
3、响应内容
	r.text		
	r.url
	r.encoding
	r.content

	
*selenium-webdriver
1、自动化测试工具(免费,支持C/java/ruby/python/..)
2、安装setuptools/pip/selenium	
	python -m ensurepip --default-pip 	pip install -U selenium 	//pip目录..Python\Scripts
3、安装chrome driver	对应chrome版本
4、脚本解析
	from selenium import webdriver
	browser = webdriver.Chrome()	//浏览器选择
	browser.get(url)				//网址
	browser.find_element_by_id().send_keys()	//输入参数
	browser.find_element_by_id().click()		//事件操作
5、元素定位
	id/class/css/.../XPath/Partiallink text
6、添加等待时间
	a、添加休眠		
	import time
	browser.implicitly_wait()
	selenium.webdriver.remote.webdriver.implicitly_wait(time_to_wait)
7、打印信息
	print driver.title 
8、浏览器操作
	browser.maximize_window() 
。。。