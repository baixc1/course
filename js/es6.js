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
4、Promise.prototype.then(suc,fail)			//then在异步调用执行完后执行	链式调用   返回Promise对象
5、Promise.prototype.catch()				//返回Promise对象	捕获对应promise链上异常
6、Promise.all(arr)							//全部成功为fulfilled
7、Promise.race()							//去最快的状态改变
8、Promise.resolve()						//返回Promise对象, fulfilled
9、Promise.reject()							//同上