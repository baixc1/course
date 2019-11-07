var myIterable = {};

function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
};
myIterable[Symbol.iterator] = gen

//Generator 函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了 Iterator 接口，可以被...运算符遍历了
// console.log(myIterable, [...myIterable])


//gen是一个 Generator 函数，调用它会生成一个遍历器对象g
let g = gen()

//g的Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己
console.log(g[Symbol.iterator]() === g)

for (var i = 0; i < 5; i++) {
    console.log(g.next())
}
console.log([...gen()])