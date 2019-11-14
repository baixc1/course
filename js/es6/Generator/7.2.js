function* inner() {
    yield 'hello!';
}

function* outer1() {
    yield 'open';
    yield inner();
    // yield* inner()
    yield 'close';
}

var gen = outer1()
for (let v of gen) {
    console.log(v)
}


// for (let i = 0; i < 4; i++) {
//     console.log(gen.next())
// }