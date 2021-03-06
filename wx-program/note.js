*微信小程序*
- background-image的本地图片真机失效		//可用网络链接(任意)
- <image>中的url路径问题		//正确路径或空(间接拼接url)
- 授权: 设置-使用我的用户信息		//需要重新预览或点击头像	wx.getSetting -> wx.getUserInfo
- 必须写好json, 再使用组件, 否则报错..get another
- 图片mode="widthFix"时, 图片不展示则撑开高度		//设置固定高度

- poster电脑无效, 手机有效
- video上的position布局无效   	//原生控件处于顶层  cover标签
- 视频js控制播放		//wx.createVideoContext('myVideo',this)  调用play()   手机有效, 必加this
- 签名
	- sha1算法				//参数: 格式化的上送字段(排序 事件戳  key(key不能上送))的字符串
	- 新增上送字段		//由sha1计算
- wx.showActionSheet		//​显示操作菜单
- wx.getImageInfo		//使用网络图片, 需加http://
- <text>组件的padding、margin 失效
- js文件有文件作用域, 不能做全局变量使用
- scroll-view的子元素不能是块元素
- 两元素之间的空隙, 使用padding可实现点击
- wxml绑定事件时, 不能加{{}}, 否则点击无反应
- hidden 前面不加:
- getUserInfo授权, bindgetuserinfo可以监听到拒绝或允许事件, 可绑定回掉函数
- 后台授权获取openid时, code的app_id要对应
- 行内元素设置margin失效
- 路由分配，redirect(进入app.js后可能报错) -> reLaunch

*调试
- 远程调试面板不自动出现 			// 打开调试/关闭调试   扫码进入 多试几次
- wx.request请求应该有返回, 但突然无返回, 		//去掉调用接口前的断点  删除进程  多试几次
- 清空远程调试数据、授权		//clear API + 开发者工具清缓存

*自定义组件
- 组件必须初始化(js), 否则找不到组件
- 自定义标签之间的margin失效			//组件上margin可能实现, 要在包裹组件元素上设置
- 自定义组件多层嵌套事件
	- 孙组件		//一般事件绑定方法, 函数中调用	this.triggerEvent('子组件绑定的函数名') 触发
	- 子组建		//bind:函数名='methods中方法'
- 自定义组件中使用wx:if, 可能使Wxml元素增多, 暂无影响。如果image元素无url, 默认300*225
- 自定义组件properties中有未传参的数据, 则报错		//'name' of undefined ...
- 自定义组件传对象时, 如需计算对象值, 最好加if渲染			//可能出现传值过快导致渲染数据未及时更新
- 全局app.css对其无效
- 开发者工具可能出问题, 打包无法在ios上访问页面