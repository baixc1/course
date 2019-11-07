class Sleep {
    constructor(timeout) {
        this.timeout = timeout;
    }
    then(resolve) {
        const startTime = Date.now();
        setTimeout(
            () => resolve(Date.now() - startTime),
            this.timeout
        );
    }
}

(async () => {
    const sleepTime = await new Sleep(1000);
    console.log(sleepTime);
})();

// console.log((async () => {
//     // const sleepTime = await Promise.resolve(1000);
//     const sleepTime = await Promise.reject(1000);
//     console.log(sleepTime);
// })());

(async () => {
    // const sleepTime = await Promise.resolve(1000);
    const sleepTime = await Promise.reject(1000);
    console.log(sleepTime);
})().catch(res => console.log(res))