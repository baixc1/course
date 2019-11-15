// var ticking = true;
// var clock = function () {
//     if (ticking)
//         console.log('Tick!');
//     else
//         console.log('Tock!');
//     ticking = !ticking;
// }
// clock()
// clock()
// clock()
// clock()


var clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};
let g = clock()
g.next()
g.next()
g.next()
g.next()