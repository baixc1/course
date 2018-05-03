selenium
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