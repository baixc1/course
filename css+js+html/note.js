1、多个background用','号隔开,蒙层优先级高->低
2、margin: auto; 对块标签元素有效，作用于自身
	text-align: center; 对行内元素/文本有效，作用域子元素
3、background-size: len,len;	设置多个背景的宽高
4、list-style(ul的简写属性) 设置列表项标志
5、nth-child(n)  先找某元素的父元素，然后找第n个(递归查找)子元素且元素必须为原元素
6、$(selector).toggle(); 	切换元素可见状态
7、text-decoration: none; 	去掉a标签修饰
8、cursor: pointer/default;		手型/默认光标
9、target: _blank/_self..		在何处打开文档链接（文档重定向）
10、a:link	未访问链接   css伪类: link、visited、hover、active 可覆盖
11、vertical-align: text-bottom;(行内元素底端对齐父元素字体底端)	定义该元素基线相对于该行基线的垂直对齐
12、圆方字体引入	@font-face{font-family: '',url:''}自定义字体系列及引入路径
13、float布局文字环绕