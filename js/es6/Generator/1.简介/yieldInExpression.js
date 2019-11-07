function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError
    console.log('Hello ' + (yield)); // OK
    console.log('Hello ' + (yield 123)); // OK
}

let gen = demo()
console.log(gen.next(1))
console.log(gen.next(2))
console.log(gen.next(3))
console.log(gen.next(4))