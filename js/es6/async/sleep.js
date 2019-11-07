// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint('hello world', 500);

//async返回的Promise可作为await命令的参数
// async function timeout(ms) {
//     await new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint('hello world', 500);




// async function sleep(value, ms) {
//     await new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
//     console.log(value);
// }

// sleep('hello world', 500);

function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval);
    })
}

// 用法
async function one2FiveInAsync() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        await sleep(1000);
    }
}

one2FiveInAsync();