let jane = { first: 'Jane', last: 'Doe' };

// for (let i of jane) {        //jane is not iterable
//     console.log(i)
// }

// Generator 函数objectEntries实现遍历器接口

// function* objectEntries(obj) {
//     let propKeys = Reflect.ownKeys(obj);

//     for (let propKey of propKeys) {
//         yield [propKey, obj[propKey]];
//     }
// }

// for (let [k, v] of objectEntries(jane)) {
//     console.log(k, v)
// }


function* objectEntries() {
    console.log(this)
    let propKeys = Reflect.ownKeys(this);

    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

//加上遍历器接口的另一种写法是，将 Generator 函数加到对象的Symbol.iterator属性上面
Object.prototype[Symbol.iterator] = objectEntries
for (let [k, v] of jane) {
    console.log(k, v)
}
