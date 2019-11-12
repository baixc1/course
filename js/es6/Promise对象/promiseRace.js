const p = Promise.race([
    new Promise(function (resolve) {
        setTimeout(() => resolve(1), 1000)
    }),
    new Promise(function (resolve) {
        setTimeout(() => resolve(2), 2000)
    })
]);

p
    .then(console.log)
    .catch(console.error);