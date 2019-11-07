var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};

var i = g();
i.next();

try {
    //Generator 函数返回的遍历器对象，都有一个throw方法
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}
  // 内部捕获 a