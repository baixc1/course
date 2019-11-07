function logInOrder(urls) {
    // 远程读取所有URL
    const textPromises = urls.map(url => {
        return fetch(url).then(response => response);
    });

    // 按次序输出
    textPromises.reduce(
        (chain, textPromise) => {
            return chain
                .then(() => textPromise)
                .then(text => console.log(text))    //0, 1, 2

        },
        Promise.resolve()
    );

    Promise.resolve()
        .then(() => textPromises[0])
        .then(text => console.log(text))
        .then(() => textPromises[1])
        .then(text => console.log(text))
        .then(() => textPromises[2])
        .then(text => console.log(text))
}

async function logInOrder1(urls) {
    for (const url of urls) {
        console.log(await fetch(url));
    }
}

async function logInOrder2(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {        //map并发执行
        return await fetch(url);
    });

    // 按次序输出
    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }
}

//输出111，222，333
logInOrder2(['111111', '22222', '3333333333333'])

function fetch(url) {
    return new Promise(reslove => {
        setTimeout(() => {
            reslove(url.slice(0, 3))
        }, 100)
    })
}
