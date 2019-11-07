function pro(p) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(p)
        }, 500)
    })
}

async function fun(num) {
    const a = await pro(num)
    const b = await pro(a + num)
    return b
}

console.log(fun(2))
fun(4).then(res => console.log(res))

console.log(1)
