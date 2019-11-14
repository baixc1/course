// function* gen() {
//     yield* ["a", "b", "c"];
// }

// console.log(gen().next())


// let read = (function* () {
//     yield 'hello';
//     yield* 'hello';
// })();

// for (var v of read) {
//     console.log(v)
// }


function* foo() {
    yield 2;
    yield 3;
    return "foo";
}

function* bar() {
    yield 1;
    var v = yield* foo();
    console.log("v: " + v);
    yield 4;
}

n = 0
for (var v of bar()) {
    if (n++ > 2) return
    console.log(v)
}