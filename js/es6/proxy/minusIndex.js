function createArray(...arr) {
    return new Proxy(arr, {
        get(target, key) {
            let index = Number(key)
            if (index < 0) {
                key = target.length + index
            }
            // return Reflect.get(target, key)
            return target[key]
        }
    })
}

let arr = createArray('a', 'b', 'c');
console.log(arr[1],arr[-1])