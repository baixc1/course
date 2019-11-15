function* g() {
    this.a = 11
}

g.prototype.hello = function () {
    return 'hi!';
};

let obj = g();

console.log(obj.a)
console.log(obj.next())
console.log(obj instanceof g) // true
console.log(obj.hello()) // 'hi!'