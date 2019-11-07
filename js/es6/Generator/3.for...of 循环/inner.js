//for...of，扩展运算符（...）、解构赋值和Array.from方内部调用的，都是遍历器接口
//都可以将 Generator 函数返回的 Iterator 对象，作为参数
function* numbers() {
    yield 1
    yield 2
    return 3
    yield 4
}

// 扩展运算符
a = [...numbers()] // [1, 2]

// Array.from 方法
b = Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
    console.log(n)
}

console.log(a, b)