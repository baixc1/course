// function* iterTree(tree) {
//     if (Array.isArray(tree)) {
//         for (let i = 0; i < tree.length; i++) {
//             yield* iterTree(tree[i]);
//         }
//     } else {
//         yield tree;
//     }
// }

// const tree = ['a', [['b1', 'b2'], 'c'], ['d', 'e']];

// for (let x of iterTree(tree)) {
//     console.log(x);
// }

// console.log([...iterTree(tree)])

// function getEle(arr) {
//     if (Array.isArray(arr)) {
//         for (let i of arr) {
//             // console.log(i)
//             getEle(i)
//         }
//     } else {
//         console.log(arr)
//     }
// }
// getEle(tree)


let a = { a: 1, b: 2 }

Object.prototype[Symbol.iterator] = function* () {
    let keys = Object.keys(this)
    for (let v of keys) {
        yield this[v]
    }
}

for (let v of a) {
    console.log(v)
}