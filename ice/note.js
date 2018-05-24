***飞冰***
*实践
1. 页面路径			//routerConfig.js








*概述
1. 基于 React    中后台应用解决方案   开发者-Iceworks   	服务体系		物料体系（组件、区块、布局、模板）
2. 管理项目
		启动调试服务   //预览
		新建页面
			-layout 
			-blocks
3. 开发调试
	项目结构
		project-name
		├── build                                    // 打包资源
		├── mock                                    // 模拟数据
		├── public                                  // 静态资源
		├── src
		│   ├── components                          // 公共组件
		│   ├── config                              // 公共配置
		│   ├── layouts                             // 通用布局
		│   ├── pages                               // 页面
		│   ├── utils                               // 通用方法
		│   ├── global.scss                         // 全局样式
		│   ├── index.html                          // 入口模板
		│   ├── index.js                            // 应用入口
		│   └── routes.jsx                          // 路由入口
		├── tests                                   // 测试
		├── .editorconfig                           // 代码风格配置
		├── .eslintignore                           // eslint 忽略目录配置
		├── .eslintrc                               // eslint 配置
		├── generator.json                          // generator.json
		├── package.json                            // package.json
		├── README.md                               // 项目说明
		└── yarn.lock                               // 模板版本管理
4. 打包发布
	构建项目		//build文件夹
5. 部署上线
	检查 html 源码中资源地址
	
*入门
1. 前后端通信
	-使用 axios 进行请求		//npm install axios --save
	-使用 DataBinder 为组件绑定数据
	-跨域问题			//同源政策
2. 开发环境配置
	-依赖于 Node.js		//版本号符合 *LTS 版本
3. React 基础知识和介绍
	创建 React 组件
		-继承 React Component 的 class
		- render方法
			-返回值 JSX 代码
		-实例化
			ReactDOM.render(<HelloMessage />, document.body);
			
	为 React 组件传入数据
		-<div>Hello {this.props.name}</div>
		-ReactDOM.render(<HelloMessage name="浩睿" />, mountNode);
		
	React 组件的变化是基于状态的
		-state 
		-this.setState 		//检测到状态有変更
4. React 组件的生命周期
	-componentWillMount
	-constructor		//准备初始数据，调用 render 方法
	-componentDidMount
	-componentWillReceiveProps
	-componentWillUpdate
	-componentDidUpdate
	-componentWillUnmount
	-render
5. 如何使用 ICE 组件
	检索组件		//物料 - 组件
	业务组件
		-npm install <packageName> --save		//安装
		-npm install <packageName>@latest --save		//更新
		-import <ComponentName> from '<packageName>';	//使用
	
*进阶指南
1. 修改主题配色
	定制
		-皮肤风格		// dark 或 light
		-主品牌色		//Hex、RGB、颜色常量
		-副品牌色
	修改
		-ice-scripts		//1.0.8 及以上版本
		-项目目录下的 package.json		//theme   primaryColor    secondaryColor
2. 如何制作表单
	- ICE 表单粘合剂组件	@icedesign/form-binder

3. 定制构建器
	-webpack  		//构建的基石
	
*物料
1. 组件
	-Button 按钮
2. 区块	
	
	
	
	