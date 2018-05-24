***网络***

服务器
1、通迅域名			//https(request)、uploadFile、downloadLoad、WebSocket(connectSocket)
2、配置			//小程序后台-设置-开发设置-服务器域名
3、HTTPS证书
4、跳过域名校验

*上传、下载*
1. wx.uploadFile(OBJECT)
2. wx.downloadFile(OBJECT)

发起请求
1、wx.request
  wx.request({
	url: '',
	data: {},
	method: '',
	header: '',
	success: function (res) {}
  })
2、获取特殊信息 			//request请求(服务器返回手机号,openid)
code -> openid
openid -> phoneNo
  
  
***媒体***
图片
1、wx.previewImage 预览图片
wx.previewImage({
	urls: []
})
2、wx.chooseImage 从本地选择图片或打开相机




  
***数据缓存***
wx.setStorageSync 同步缓存



***设备***
系统信息
1、wx.getSystemInfo 获取系统信息
2、wx.canIUse 判断api是否可用
网络状态
1、wx.getNetworkType 获取网络类型（2g,3g,4g,wifi,...)




***界面***
*设置导航条
1、wx.setNavigationBarColor
wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
        duration: 400,
        timingFunc: 'easeIn'
    }
})
2、wx.setNavigationTitle

*绘图
wx.canvasToTempFilePath(OBJECT, this)		//画布导出图片, 返回文件路径



交互反馈
1、wx.showActionSheet 操作菜单
wx.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success: function(res) {
    console.log(res.tapIndex)
  }
})

导航
1、wx.navigateTo 保留当前页，跳转页面   参数url（可传参）
2、wx.redirectTo 关闭当前页，跳转页面
3、wx.relaunch 关闭所有页面，跳转页面


***开放接口***
*登录*
1、wx.login		获取临时登录凭证(code)
wx.login({
  success: function(res) {
	if (res.code) {		
	}
  }
});
2、wx.getSetting  	设置
wx.getSetting({
  success: (res) => {
    var flag = res.authSetting['scope.userInfo']		用户授权结果
  }
})
3、wx.getUserInfo		用户信息
wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
  }
})
4、授权
	wx.authorize({
		scope: '',
		success() {}
	})
	wx.getSetting()		//获取授权信息
	wx.openSetting()	//已授权页面

*转发*
1. onShareAppMessage(options){return {}}			//设置转发信息, return-自定义转发字段
	options 	-from  -target			//button、menu
	return		-title 	-path 	-imageUrl		
2. wx.showShareMenu(OBJECT)					//转发按钮
	-withShareTicket	-success..
3. wx.hideShareMenu(OBJECT)			//隐藏转发按钮
4. wx.updateShareMenu(OBJECT)
5. wx.getShareInfo(OBJECT)			//获取转发详细信息
6. 获取更多转发信息
	在 App.onLaunch() 或 App.onShow 获取到一个 shareTicket
	wx.getShareInfo(shareTicket) 
7. 页面内发起转发
	<button open-type="share">		//触发 Page.onShareAppMessage		去掉默认样式  plain="true"
	
*模板消息*
1. 使用
	-获取模板ID

***页面***
交互反馈
1、wx.showLoading  loadding框
wx.showLoading({
  title: '正在加载中...',
  mask: false
})
2、wx.hideLoading
