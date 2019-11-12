new Promise(() => {
    throw new Error('test1');
}).catch(function (error) {
    console.log(String(error));
});

new Promise((res, reject) => {
    try {
        throw new Error('test2');
    } catch (e) {
        reject(e)
    }
}).catch(function (error) {
    console.log(String(error));
});

new Promise((res, reject) => {
    reject(new Error('test3'));
}).catch(function (error) {
    console.log(String(error));
});

new Promise((res, reject) => {
    res(1)
    reject(new Error('test4'));     //无效
}).catch(function (error) {
    console.log(String(error));
});
