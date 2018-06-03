*api*
*选项/DOM
	- el 
		-string | HTMLElement
		-vm.$el		//实例挂载后
	- template
		-string
		-Vue 实例的标识	//Vue 选项中包含渲染函数，该模板将被忽略
	- render
		-(createElement: () => VNode) => VNode
*选项/资源
	- components
		-Object
		-可用组件哈希表