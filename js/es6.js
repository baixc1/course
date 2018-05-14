Promise 对象
*总览
1、异步编程
2、避免了层层嵌套回调函数
3、语法
	const promise = new Promise(function(resolve, reject) {
	  if (/* 异步操作成功 */){
		resolve(value);			//pending -> resolved
	  } else {
		reject(error);			//pending -> rejected
	  }
	});
	promise.then(function(value) {	//回调函数
	  // success
	}, function(error) {
	  // failure
	});