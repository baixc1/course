const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 1000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2
    .then(result => console.log(1))
    .catch(error => console.log(2))