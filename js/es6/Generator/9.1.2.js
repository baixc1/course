// function* F() {
//     console.log(this === obj)
//     this.a = 1;
//     yield this.b = 2;
//     yield this.c = 3;
// }
// var obj = {};
// var f = F.call(obj);

// console.log(obj.a) // 
// console.log(obj.b) // 
// console.log(obj.c) // 

// console.log(f.next())  // Object {value: 2, done: false}
// console.log(f.next());  // Object {value: 3, done: false}
// console.log(f.next());  // Object {value: undefined, done: true}

// console.log(obj.a) // 1
// console.log(obj.b) // 2
// console.log(obj.c) // 3



// function* F() {
//     this.a = 1;
//     yield this.b = 2;
//     yield this.c = 3;
// }
// var f = F.call(F.prototype);

function* gen() {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

function F() {
    return gen.call(gen.prototype);
}

var f = new F();

console.log(f.next())  // Object {value: 2, done: false}
console.log(f.next());  // Object {value: 3, done: false}
console.log(f.next());  // Object {value: undefined, done: true}

console.log(f.a) // 1
console.log(f.b) // 2
console.log(f.c) // 3