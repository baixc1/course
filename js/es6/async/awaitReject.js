// (async () => {
//     await Promise.reject('1111').catch(e => console.log(1))//输出
//     console.log(12) //输出
// })().catch(data => console.log(2))  //未输出

// (async () => {
//     try {
//         Promise.reject('1111')
//     } catch (e) { }
//     console.log(12) //输出
// })().catch(data => console.log(2))  //未输出