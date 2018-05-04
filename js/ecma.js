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
	
2、舍入误差
	有限小数转化为无限位二进制小数, 计算机存储有限位
	解决: 放大10的n次方倍, 取整, 然后除以...