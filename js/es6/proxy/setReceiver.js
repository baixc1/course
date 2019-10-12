const handle = {
    set(obj, prop, value, receiver) {
        console.log(obj, prop, value, receiver)
        obj[prop] = receiver;
    }
}

const proxy = new Proxy({}, handle);
proxy.foo = '1';
proxy['2'] = '1';
console.log(proxy.foo === proxy);