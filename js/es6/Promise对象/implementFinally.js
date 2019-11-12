Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    // console.log(P === Promise)
    // console.log(this === p1)
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

// var p1 = Promise.resolve(1)
// var p2 = p1.finally(() => console.log(333)).then(v => console.log(v))


// var p1 = Promise.resolve(1)
// var p2 = p1.finally((a) => console.log(333, a))
// console.log(p2)


// var p1 = Promise.reject(1)
// var p2 = p1.finally((a) => console.log(333, a)).catch(v => console.log(v))
// console.log(p2)
