// var g = function* () {
//     while (true) {
//         try {
//             yield;
//         } catch (e) {
//             if (e != 'a') throw e;
//             console.log('内部捕获', e);
//         }
//     }
// };

// var i = g();
// i.next();

// try {
//     throw new Error('a');
//     throw new Error('b');
// } catch (e) {
//     console.log('外部捕获', e);
// }



// var g = function* () {
//     while (true) {
//         yield;
//         console.log('内部捕获', e);
//     }
// };

// var i = g();
// i.next();

// try {
//     i.throw('a');
//     i.throw('b');
// } catch (e) {
//     //如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获
//     console.log('外部捕获', e);
// }



// var gen = function* gen() {
//     yield
//     yield console.log('hello');
//     yield console.log('world');
// }

// var g = gen();
// g.next();
// //如果 Generator 函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。
// g.throw();
// console.log(111)



// function* gen() {
//     try {
//         yield 1;
//     } catch (e) {
//         console.log('内部捕获');
//     }
// }

// var g = gen();
// //throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法
// g.throw(1);



// var gen = function* gen() {
//     try {
//         yield console.log('a');
//     } catch (e) {
//         // ...
//     }
//     yield console.log('b');
//     yield console.log('c');
// }

// var g = gen();
// g.next() // a
// //throw方法被捕获以后，会附带执行下一条yield表达式
// g.throw() // b
// g.next() // c



// var gen = function* gen() {
//     yield console.log('hello');
//     yield console.log('world');
// }

// var g = gen();
// g.next();

// try {
//     throw new Error();
// } catch (e) {
//     g.next();
// }



// function* foo() {
//     var x = yield 3;
//     var y = x.toUpperCase();
//     yield y;
// }

// var it = foo();

// console.log(it.next()); // { value:3, done:false }

// try {
//     it.next(42);
// } catch (err) {
//     //Generator 函数体内抛出的错误，也可以被函数体外的catch捕获
//     console.log(err);
// }


function* g() {
    yield 1;
    console.log('throwing an exception');
    //一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了
    throw new Error('generator broke!');
    yield 2;
    yield 3;
}

function log(generator) {
    var v;
    console.log('starting generator');
    try {
        v = generator.next();
        console.log('第一次运行next方法', v);       //1
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第二次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);     //1
    }
    try {
        v = generator.next();
        console.log('第三次运行next方法', v);       //done
    } catch (err) {
        console.log('捕捉错误', v);
    }
    console.log('caller done');
}

log(g());