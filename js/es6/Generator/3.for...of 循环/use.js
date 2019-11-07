//for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

//一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象
for (let v of foo()) {
    console.log(v);
}