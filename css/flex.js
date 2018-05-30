*弹性盒模型
1. flex		//display: flex
	子元素
	- flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;
		-auto 		//1 1 auto
		-none		//0 0 auto		内容决定
		-initial	//0 1 auto
		
		-flex-basis			//伸缩基准值		长度单位/百分比..
		-flex-grow			//剩余扩展比率		initial(0)
		-flex-shrink		//溢出比率收缩		默认宽度之和大于容器	initial(1)
	父元素
	- flex-flow		// flex-direction 	 flex-wrap	子元素排列方式
		-flex-direction		//方向				
			-值	flex-direction: row|row-reverse|column|column-reverse|initial|inherit;
		-flex-wrap		//是否拆行或拆列	nowrap/wrap...
2. 对齐
	- justify-content		//横轴对齐方式
		-值 flex-start|flex-end|center|space-between|space-around|initial|inherit;
	- align-content			//纵轴		多行整体居中(单行无效)   会覆盖align-items
		-值	stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit;
	- align-items			//纵轴		多行个体居中
		-值 stretch|center|flex-start|flex-end|baseline|initial|inherit;