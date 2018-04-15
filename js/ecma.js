1、定时器传参
a、字符串形式
	setTimeout("fn(name)",100); name是变量 => eval("fn(name)")
b、调用fn返回不带餐函数（该函数调用带参函数） 
	function fn(name){
		return function(){
			fn1(name)
		}
	}
c、重写,bind/apply/call方法
	