function spawn(genF) {  //自动执行器
    return new Promise(function (resolve, reject) {
        const gen = genF();
        function step(nextF) {
            let next;
            try {
                next = nextF();
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () { return gen.next(v); });
            }, function (e) {
                step(function () { return gen.throw(e); });
            });
        }
        step(function () { return gen.next(undefined); });
    });
}

function fn(args) {
    return spawn(
        function* () {      //Generator 函数
            console.log(
                yield new Promise(res => {
                    setTimeout(() => {
                        console.log(1)
                        res(2)
                    })
                }, 100)
            );
            console.log(3)
        }
    );
}

async function fn1() {
    console.log(
        await new Promise(
            res => {
                setTimeout(() => {
                    console.log(11)
                    res(22)
                })
            }
        )
    )
    console.log(33)
}

fn()
fn1()