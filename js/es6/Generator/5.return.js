// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// var g = gen();
// a = g.next()        // { value: 1, done: false }

// // b = g.return('foo') 
// b = g.return() 


function* numbers() {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
var g = numbers();

for (let i = 0; i < 5; i++) {
    if (i == 2) {
        console.log(g.return(7))
    } else {
        console.log(g.next())
    }
}