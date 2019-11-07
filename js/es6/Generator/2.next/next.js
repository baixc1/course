function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        console.log('reset ' + reset);     //undefined,true
        if (reset) { i = -1; }
    }
}

var g = f();

console.log(g.next())   //0
console.log(g.next())   //1

//next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值
console.log(g.next(true))   //0