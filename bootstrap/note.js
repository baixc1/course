***bootstrap-datetimepicker***
1、vue初始化控件不能再created里
2、初始化
	$().datetimepicker({
		format: '',			//显示时间格式
		autoClose: '',		//选择日期后是否关闭弹窗
		minView: '',		//最小的选择范围(Month -> 日)
		bootcssVer: 3,		//显示左右箭头
		todayBtn: true		//显示今日按钮
	})