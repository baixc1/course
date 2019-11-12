// let thenable = {
//     then: function (resolve, reject) {
//         resolve(42);
//     }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function (value) {
//     console.log(value);  // 42
// });

// const p = Promise.resolve('Hello');

// p.then(function (s) {
//     console.log(s)
// });

setTimeout(function () {
    console.log('three');
}, 0);

Promise.resolve().then(function () {
    console.log('two');
});

Promise.resolve(1).then(function () {
    console.log('four');
});

console.log('one');