***视图层***
WXML
1、列表渲染
wx-for'指令',默认index,item


***逻辑层***
1、注册注册程序 App()   
	getApp() 获取初始化的全局实例
	getCurrentPages()获取所有页面对象的栈
	引用工具模块 
		module.exports = {}
		const xx = required('相对路径')
		
2、注册页面 Page(object)
	参数：data,onLoad页面加载,onShow页面显示,onHide,onUnload,onReachBottom,any...  
	Page({
	  data: {},
	  onLoad: function(options) {}
	})
	初始化数据-生命周期（onLoad,onShow,onReady,onHide,onUnload)-页面事件处理函数-this.setData({})
	
	

	
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
