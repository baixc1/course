var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get: function (target, property) {
        console.log(target, property);
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

console.log(proxy.name);
proxy.age