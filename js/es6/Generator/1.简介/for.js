var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
    var length = a.length;
    //数组forEach方法的参数是一个普通函数，改用for循环
    for (var i = 0; i < length; i++) {      
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

for (var f of flat(arr)) {
    console.log(f);
}