
function getFoo() {
    return new Promise(function (resolve) {
        setTimeout(() => { resolve(1) }, 1000)
    })
}

// (async () => {
//     console.log(await getFoo())
//     console.log(await getFoo())
// })();

// (async () => {
//     let [foo, bar] = await Promise.all([getFoo(), getFoo()]);
//     console.log(foo, bar)
// })()
(async () => {
    let a = getFoo()
    let b = getFoo()
    console.log(await a)
    console.log(await b)
})()