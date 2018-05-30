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
1. 实例化 Vue		
	- var vm = new Vue()
		- el
		- data		//响应式系统	$dataObj==dataObj
		- methods 

*模板语法
	- {{}}			//文本插值
	- v-html		//html代码
	- v-bind:(参数)		//HTML属性	
	- js表达式
	- v-*		//指令	v-if..
	- v-on:[event]	//事件		
	- 修饰符		//prevent-preventDefault
	- 用户输入		// v-model 
	- 过滤器		//管道符'|'  
		-语法		//{{数据|函数}} 	函数(数据)  
		-串联		//{{ message | filterA | filterB }}
		-多参		//{{ message | filterA('arg1', arg2) }}	-> 	filterA(message, 'arg1', arg2)
	-缩写
		v-bind - :
		v-on - @
		
	