Beautiful Soup库
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
7、css选择器



uiautomator		Android自动化测试框架(UI测试)
1、from uiautomator import device as d

