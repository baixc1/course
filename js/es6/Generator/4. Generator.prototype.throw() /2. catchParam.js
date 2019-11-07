var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log(e);
    }
};

var i = g();
i.next();
//throw方法可以接受一个参数，该参数会被catch语句接收
i.throw(new Error('出错了！'));