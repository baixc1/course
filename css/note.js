***css***
*样式
1、多个background用','号隔开,蒙层优先级高->低
2、background-size: len,len;	//设置多个背景的宽高
3、text-decoration: none; 		//去掉a标签修饰
4、list-style(ul的简写属性) 	//设置列表项标志
5、vertical-align: text-bottom;	//(行内元素底端对齐父元素字体底端)	定义该元素基线相对于该行基线的垂直对齐
6、cursor: pointer/default;		//手型/默认光标
7、overflow: auto;				//设置滚动条(必须有高度), 负margin可隐藏滚动条
8、outline: none;				//解决button点击后出现的框
9、white-space: nowrap			//文本不进行换行
10、transition: property duration..		//过渡
11、font:	font-weight font-size/line-height font-family	
12、absolute定位				//相对于非static定位的父元素(可用relative撑开父元素高度)
13、image居中					//display: block; margin: 0 auto;
14、inline-block			//基线对齐		vertical-align
15、居中布局
		父: display: flex;	flex-direction: center;	align-items: center;	//图文混合
		父: flex-flow:wrap;		//伸缩容器		多行多列

*框模型*
1、	margin: auto; 	对块标签元素有效，作用于自身
2、text-align: center; 	对行内元素/文本有效，作用域子元素
3、文字对于box上下对齐布局			//line-height等于font-size
4、width: max-content				//自适应内部元素
	
*选择器*
1、nth-child(n)  	先找某元素的父元素，然后找第n个(递归查找)子元素且元素必须为原元素
2、a:link	未访问链接   
	css伪类: link、visited、hover、active 可覆盖
	css伪元素:	:after{content: ''}			//可作为下边框


*定位*
1、float布局存在文字环绕情况
2、清除浮动的影响
	- overflow:hidden			
	- clear:both			//只清除影响, 不撑开父元素			内部标签可撑开
	- :after				//伪元素	 content: ''    display: block		clear:both;


*高级*
1、圆方字体引入	@font-face{font-family: '',url:''}		//自定义字体系列及引入路径
2、flex布局
	.box{
		display: flex,			//父元素启用弹性布局
		flex-direction: column	//Flexible projects will be displayed vertically
	} 	
	.child{						//子元素
		justify-content: center;	//水平居中
		align-item: center;		//竖直居中
		flex-grow: 1;				//平分剩余空间
		flex: 1;					//剩余空间所占比例, 可为小数
	}
3、过度
	transition: transform 2s;		//设置css属性的过度动画
4、平移
	transform: translate('10px');	//css变换: 移动到坐标轴的指定位置
5、translate和overflow:scroll;		//合用可能出现bug, translate-translate移动, scroll-scrollLeft移动
	
	
	