*jQuery选择器*
1、:first选择器  和  css伪类:nth-child  区别: 后者会判断是否为指定元素, 前者不会

*效果*
1、$(selector).toggle(); 	切换元素可见状态
2、$(seletor).animate({height:"300px"});		//可替代css过渡

*HTML/CSS*
$(selector).width([val/fn])		//尺寸
$(selector).scrollLeft()		//设置或获取距离

*ajax*
$.ajax(url,settings);		//注意跨域问题,url,data,fun或{url:'',data:{},success:(){}}
$.get(url,data,fun,'json');		//转json对象
$.post(url,data,fun);					