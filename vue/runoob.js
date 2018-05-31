*概述
1. 构建用户界面		渐进式框架
2. 自底向上增量开发

*命令行工具
1. npm install --global vue-cli		//vue -V
2. vue init webpack my-project		//webpack配置, 可空

*目录结构
	- build		//webpack构建的代码
	- config
	- node_modules
	- src		//开发目录
		-assets
		-components
		-App.vue		//入口
		-main.js		//核心文件
	- static
	- test		//可删除
	- .xxxx文件		//语法配置，git配置等
	- index.html		//首页入口文件
	- package.json		//项目配置文件
	- README.md

*起步
实例化 Vue		
	- var vm = new Vue()
		- el
		- data		//响应式系统	$dataObj==dataObj
		- methods 

模板语法
	- {{}}			//文本插值
	- v-html		//html代码
	- v-bind:(参数)		//HTML属性(属性值为变量)(自定义属性)
	- js表达式
	- v-*		//指令	v-if..
	- v-on:[event]	//事件		
	- 修饰符		//prevent-preventDefault
	- 用户输入		// v-model 
	- 过滤器		//管道符'|'  
		-语法		//{{数据|函数}} 	函数(数据)  
		-串联		//{{ message | filterA | filterB }}
		-多参		//{{ message | filterA('arg1', arg2) }}	-> 	filterA(message, 'arg1', arg2)
	- 缩写
		v-bind - :
		v-on - @
条件与循环
计算属性
	- computed 		//基于依赖缓存
	- setter			//值->依赖
监听属性
	- watch		//响应数据变化
样式绑定
	- 字符串、对象或数组
事件处理器
	- v-on 
		-方法
		-内联 js 语句
	- 事件修饰符
		-.stop
		-.prevent
		...
	- 按键修饰符
表单
	- v-model
	- 修饰符
		-.lazy		//事件input -> change 
		-.number
		-.trim
组件
	- Component		//扩展HTML元素，封装可重用的代码
	- Vue.component(tagName, options)		//全局组件
	- 局部组件		//实例化中
	- Prop		//父组件传参(数组)		可动态 可循环		单向绑定
	- Prop 验证		//数组->对象
		- propA: type(数据类型)	//构造器、数组、对象、默认值、自定义验证函数
	- 自定义事件		//子 -> 父
		-事件接口	//Events interface 类似微信小程序
			-$on(eventName) 监听事件		//子组件v-on事件
			-$emit(eventName,[]) 触发事件
			
	