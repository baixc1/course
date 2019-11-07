//Generator 函数是一个普通函数,两个特征:星号,yield表达式
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

//调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针
var hw = helloWorldGenerator();

for (var i = 0; i < 5; i++) {
    //每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象
    console.log(hw.next())
}

console.log([...helloWorldGenerator()])