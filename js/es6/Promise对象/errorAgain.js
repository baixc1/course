const someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

// someAsyncThing().then(function () {
//     return someOtherAsyncThing();
// }).catch(function (error) {
//     console.log('oh no', error);
//     // 下面一行会报错，因为 y 没有声明
//     y + 2;
// }).then(function () {
//     console.log('carry on');
// });

someAsyncThing().then(function () {
    console.log('no move')
    return someOtherAsyncThing();
}).catch(function (error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
}).catch(function (error) {
    console.log('carry on', error);
});

