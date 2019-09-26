let proto = new Proxy({}, {
    get(target, propertyKey) {
        console.log(target, propertyKey)
        return target[propertyKey]
    }
});

let obj = Object.create(proto);
console.log(obj.foo)