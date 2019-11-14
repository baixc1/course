function* foo() {
    yield 'a';
    yield 'b';
}

// function* bar() {
//     yield 'x';
//     // 手动遍历 foo()
//     for (let i of foo()) {
//         console.log(i);
//     }
//     yield 'y';
// }

function* bar() {
    yield 'x';
    yield* foo();
    yield 'y';
}

for (let v of bar()) {
    console.log(v);
}