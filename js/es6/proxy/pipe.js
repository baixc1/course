var pipe = value => {
    let funcStack = []
    var oproxy = new Proxy({}, {
        get(obj, key) {
            if (key != 'get') {
                funcStack.push(eval(key))
            } else {
                return funcStack.reduce((val, fn) => {
                    return fn(val)
                }, value)
            }
            // console.log(funcStack[0](2))
            return oproxy;
        }
    })
    return oproxy
}

let double = n => n * 2;
let pow = n => n * n;

console.log(pipe(3).double.pow.get)