// const someAsyncThing = function () {
//     return new Promise(function (resolve, reject) {
//         resolve(x + 2);
//     });
// };

// someAsyncThing()
//     .catch(v => console.log('error'))
//     .then(v => console.log(v))

Promise.resolve()
    .catch(v => console.log(v))
    .then(v => console.log(1, v))