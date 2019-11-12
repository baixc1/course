// const p2 = Promise.reject('出错了');
// // 等同于
// const p1 = new Promise((resolve, reject) => reject('出错了'))

// console.log(p1, p2)

// Promise.allSettled([p1, p2]).then(v => console.log(v));

const thenable = {
    then(resolve, reject) {
        reject('出错了');
    }
};

Promise.reject(thenable)
    .catch(e => {
        console.log(e === thenable)
    })