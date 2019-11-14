// const g = function* (x, y) {
//     let result = yield x + y;
//     return result;
// };

// const gen = g(1, 2);
// console.log(gen.next()); 

// console.log(gen.next(1)); //1

const g = function* () {
    console.log(2)
    let result = yield 1;
    return result;
};

const gen = g();
gen.throw(new Error('出错了'))