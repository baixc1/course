const fs = require('mz/fs');

let fun = async () => {
    let expression = await fs.readFile('fun/data.txt', 'utf-8')
    let fn = new Function('return ' + expression);
    let r = fn();
    return r;
}

module.exports = fun