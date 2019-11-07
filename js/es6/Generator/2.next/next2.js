function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

// var a = foo(5);
// console.log(a.next()) // Object{value:6, done:false}
// console.log(a.next())// Object{value:NaN, done:false}
// console.log(a.next()) // Object{value:NaN, done:true}

// var b = foo(5);
// let tem = b.next()
// console.log(tem)// { value:6, done:false }

// tem = b.next(tem.value)
// console.log(tem)  //{ value:4, done:false }

// tem = b.next(tem.value)
// console.log(tem)  //5+12+4

(() => {
    var b = foo(8)
    fun()
    function fun(value) {
        let tem = b.next(value)
        console.log(tem)
        if (!tem.done) {
            fun(tem.value)
        }
    }
})()