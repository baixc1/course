new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
}).then(v => console.log(v))