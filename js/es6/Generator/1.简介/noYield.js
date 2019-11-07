function* f() {
    console.log('执行了！')
}

var generator = f();

setTimeout(function () {
    //只有调用next方法时，函数f才会执行
    generator.next()
}, 2000);