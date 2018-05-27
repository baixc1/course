*教程
1. 用途
	- 构建UI
	-  V（视图）
2. 特点
	- 声明式设计		//声明范式
	- 高效		//减少与DOM的交互
	- 灵活		//配合库或框架
	- JSX		//js扩展
	- 组件		//复用代码
	- 单向响应的数据流
	
*安装
1. babel.min.js - ES6转ES5  JSX支持	//<script type="text/babel">
2. 通过 npm 使用 React
3. create-react-app构建
	npm install -g create-react-app
	create-react-app my-app
	cd my-app/
	npm start
4. 项目目录
	  README.md
	  node_modules/
	  package.json
	  .gitignore
	  public/
		favicon.ico
		index.html
	  src/
		App.css
		App.js
		App.test.js
		index.css
		index.js
		logo.svg
*JSX		//像 XML 的 JavaScript 语法扩展   执行更快 类型安全 编写简单
1. 独立文件
2. js 表达式		//{表达式}	conditional 
3. 样式			//内联样式 	camelCase语法
4. 注释			//{/*注释...*/}(标签内)
5. 数组			//自动展开
6. HTML 标签 vs. React 组件		// HTML标签 - 小写字母开头		组件 - 大写字母开头

*组件
1. React.createClass		//生成组件类 	一个顶层标签
2. this.props			//组件传参	className 	htmlFor 
3. 复合组件

*State(状态)
1. 组件 -> 状态机（State Machines）		//state
2. React.createClass参数			//this.setState 	onClick		return()
	- render 	
	- getInitialState 	
	- 自定义方法		

*Props		//不可变
1. 默认 Props		//getDefaultProps()
2. Props 验证		//validator
	-propTypes		//React.createClass参数

*组件API
	- setState(object nextState[, function callback])		//重绘
		-nextState		//state合并
		-callback		//组件渲染后调用
	- replaceState		//只保留nextState中状态
	- setProps			//props合并		重新渲染
	- replaceProps
	- forceUpdate([function callback])		//render重新渲染组件	读取props,state
	- findDOMNode
	- isMounted(name)
	
*组件生命周期
1. 组件生命周期状态
	- Mounting		//已插入真实 DOM
	- Updating		//正在被重新渲染
	- Unmounting
2. 生命周期方法
	- componentWillMount 
	- componentDidMount 
	- componentWillReceiveProps 
	- shouldComponentUpdate 
	- componentWillUpdate
	- componentDidUpdate 
	- componentWillUnmount
	
*AJAX
1. componentDidMount - Ajax		//请求
2. componentWillUnmount 		//取消

*表单与事件
1. onChange 		//input事件
2. 父->子->父		//组件

*Refs
1.  backing instance		//实例   ref=""