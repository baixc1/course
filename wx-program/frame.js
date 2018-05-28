项目: 
1、组件化			//思想: 一切皆组件	功能模块组件化	解耦
2、页面组件划分
	- 展示区域 > 标题 > 列表
	- 列表 > 列表内容











***配置***
app.js		//全局配置,pages、window、tabBar、networkTimeout、debug
page.json	//只配置app.json中的window项

***逻辑层***
1、注册程序 App()   		//onLaunch、onShow、onHide、onError、onPageNotFound、其他
	getApp() 获取初始化的全局实例
	getCurrentPages()获取所有页面对象的栈
	引用工具模块 
		module.exports = {}
		const xx = required('相对路径')
2、场景值	
3、注册页面 Page(object)		//onLoad、onReady、onShow、onHide、onUnload...
	参数：data,onLoad页面加载,onShow页面显示,onHide,onUnload,onReachBottom,any...  
	Page({
	  data: {},
	  onLoad: function(options) {}
	})
	初始化数据-生命周期（onLoad,onShow,onReady,onHide,onUnload)-页面事件处理函数-this.setData({})
4、路由			//Tab 切换、返回、重定向、打开、初始化、重启动
	wx.navigateTo 
	wx.navigateBack
	wx.redirectTo
	wx.switchTab
	wx.reLaunch
5、模块化
	文件作用域
	模块化		//module.exports、require(path)
6、API
	

***视图层***
1、WXML
	数据绑定		//组件属性、控制属性、关键字
	列表渲染		//wx-for'指令',默认index,item    block  wx:key 
	条件渲染		//if(hidden)	block(包装元素, 常用于if/list) 	
	模板			//定义(name)<template>、使用(is、data)、模板作用域
	事件			
		事件分类
			冒泡事件	//touchstart、touchmove、tap...
			非冒泡事件
		事件绑定和冒泡	//bind或catch+事件   value
		事件对象
			BaseEvent		//target-触发事件源组件,currentTarget-事件绑定组件, data-set 自定义属性集合
			CustomEvent 
			TouchEvent 
	引用			//import和include
2、WXS
	WXS 模块			//<wxs> 标签、.wxs 文件、module 对象、require函数
	...
3、WXSS
	尺寸单位		//rpx
	样式导入		//@import
	选择器
	flex布局
		
			
		
***自定义组件***
0、概述
	- 创建		
		- json声明 	// "component": true		
		- js注册 	// Component(obj)
	- 使用
		- json声明		//usingComponents
1、组件模版和样式
	- slot			//承载子节点	Component-options-multipleSlots(name) -> 多slot支持
	- 组件样式
		- 用class选择器
		- 样式继承		//font color
		- 其他样式无影响
2、Component构造器
	参数
		-properties			//组件对外属性  type  value  observer			js驼峰写法 - wxml连字符写法
		-data 			//内部数据
		-methods
		-created			//组件进入页面
		-attached
		-ready		//布局完成
		-moved		//组件被移动时执行
		...
	实例成员
		-dataset
		-data
		-setData
		-triggerEvent
3、组件事件
	- triggerEvent 		//触发事件
		-事件名
		-detail对象
		-事件选项				//bubbles..
4、behaviors			//代码共享
	- Behavior() 		//构造器
	- 包含属性、数据、生命周期函数和方法
	- 覆盖和组合规则			
		-属性或方法		//组件 > behavior		后 > 前
		-数据对象		//合并
		-生命周期函数		//逐个调用
	- 内置 behaviors
		-获得内置组件的一些行为
		-wx://form-field		//表单控件行为 name	value
5、组件件关系
	- relations
		-type			//相对关系				parent 、 child 、 ancestor 、 descendant
		-linked			//关系生命周期函数		attached之后
		-target			//关联





***兼容***
1、判断
	wx.getSystemInfo
	wx.getSystemInfoSync
	wx.canIUse
