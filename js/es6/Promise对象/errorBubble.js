// Promise.resolve(1111)
//     .then(a => { console.log(1, a); return Promise.resolve(2222) })
//     .then(a => console.log(2, a))
//     .catch(a => console.log(3, a))

// Promise.resolve(1111)
//     .then(a => { console.log(1, a); return Promise.reject(2222) })
//     .then(a => console.log(2, a))
//     .catch(a => console.log(3, a))


Promise.reject(1111)
    .then(a => { console.log(1, a); return Promise.resolve(2222) })
    .then(a => console.log(2, a))
    .catch(a => console.log(3, a))