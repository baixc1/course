console.log(Promise.resolve('foo'))
// 等价于
console.log(new Promise(resolve => resolve('foo')))