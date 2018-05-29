***html***
1、meta标签
	http-equiv="X-UA-Compatible" content="IE=edge"  //文档兼容模式
	name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable="no"	//手机适配
2、a标签
	href='/'					//链接根目录
	target: _blank/_self..		//在何处打开文档链接（文档重定向）
3、canvas
	画扇形图	
	a、cxt = $('#id')[0].getContext("2d");		//获取画布对象
	
	循环
	a、cxt.beginPath()					//起始或重置路径
	b、cxt.moveTo()						//把路径移动到画布中的指定点
	c、cxt.arc()						//画弧
	d、ctx.fillStyle					//填充色
	e、ctx.fill							//填充
	f、ctx.textAlign					//字居中
	g、ctx.fillText						//设置字及其位置
	
	注意: 
	a、元素挂载后才能执行画图
	b、html的width属性才是设置(画板和画纸(默认300*150))宽高, style只设置画板宽度
	c、fillText的fillStyle不能和fill一样
	d、fillText计算位置 x+r*cos(angle)
	f、旋转起始位置可用-90开始
4、textarea				//多行的文本输入控件
5、禁止选中文字			// 父元素加onselectstart="return false"

***浏览器***
*加载、解析、渲染*
1、加载
url请求->解析主机名->DNS查询(Domain Name System)(先取缓存),网址转换为ip->http请求->TCP(Transmission Control Protocol)连接(三次握手)->前端请求->服务器html响应->显示html->资源对象请求及响应(css/js/img..)
2、解析
html自上而下加载(逐步完成), 并解析渲染
构建dom树(深度遍历) -> css Rule Tree -> 构造Render Tree
3、渲染
解析html构建dom树->构建render树->布局render树->绘制render树
回流(Reflow): 影响布局的变化(dom操作、尺寸、table), 耗时多, 影响性能
重画(Repaint): 不影响布局的变化(color、position)
减少回流/重画
css选择器从右到左进行匹配
js下载(非动态创建script)和执行会阻止dom树的构建
cn: 顶级域名  com: 机构域名	


*chrome TimeLine*
周期	Redirect -> App Cache -> DNS -> TCP -> Request -> Response