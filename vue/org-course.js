*基础-组件基础		
	- Vue.component(name,{})	//可复用的 Vue 实例
		-data		//函数
		-template	//模板	``: 模板字符串
		-props		//数组		v-bind 来动态传递 prop
	- 组件向父发消息		//$event接收$emit参数
	- 组件上v-model
	- <slot>插槽
	- 动态组件	<component v-bind:is="$var"></component>
		-名字
		-对象
		
*工具
	- 单文件组件
		-.vue文件
			-完整语法高亮
			-CommonJS模块
			-组件作用域的 CSS
			-预处理器		//Babel
		- 关注点分离