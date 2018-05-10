***配置***
app.js		//全局配置,pages、window、tabBar、networkTimeout、debug


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
	条件渲染		//if(hidden)	block 	
	模板			//定义(name)<template>、使用(is、data)、模板作用域
	事件			
		事件分类
			冒泡事件	//touchstart、touchmove、tap...
			非冒泡事件
		事件绑定和冒泡	//bind或catch+事件   value
		
		
***自定义组件***
1、类似page,json声明component: true
2、注册: Component()
3、使用时json引用,usingComponent
4、this.selectComponent('#id') 获取组件对象 
5、this.triggerEvent("实例的事件key") 触发自定义事件
6、this.setData() 修改组件值

Component({
  properties: {//组件的对外属性,有value,type
  },	
  data: {}, // 私有数据，可用于模版渲染
  methods: { }
})
