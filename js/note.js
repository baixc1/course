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
	Number.prototype.toFixed()		//chrome/Firefox某些版本显示不正确
	
3、js导出excel(服务器端中转方式)
	location.href = '';
	data:application/vnd.ms-excel;base64
	xmlns:o="urn:schemas-microsoft-com:office:office" 
	xmlns:x="urn:schemas-microsoft-com:office:excel" 
	xmlns="http://www.w3.org/li/REC-html40"
	
	<head>
	<!--[if gte mso 9]>
	<xml>
		<x:ExcelWorkbook>
			<x:ExcelWorksheets>
				<x:ExcelWorksheet>
					<x:Name>{worksheet}</x:Name>			//表名
					<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
				</x:ExcelWorksheet>
			</x:ExcelWorksheets>
		</x:ExcelWorkbook>
	</xml>
	<![endif]-->
	</head><body><table>{table}</table></body></html>'			//内容
	
	
4、正则匹配不含特点字符串
	^(?!.*(title|wrp)).*$
	?:   ?= 和 ?!(预查)		//非捕获元
	\r\n					//匹配换行
	^ $						//整行	开始-结尾
	.*要放在预查中
	
5、console.log
	可使用pirntf()风格的占位符(%d/%s/%o..)		//console.log("圆周率是%f",3.1415926);
	打印字符串+对象								//console.log('o',{a:1})