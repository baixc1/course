'use strict'

var fs = require('fs');

var rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', data => console.log(1,data))

rs.on('end', () => console.log('end'))

rs.on('error', err => console.log(err))

var ws = fs.createWriteStream('output.txt','utf-8')
ws.write('休息休息所所所所所所色二二二二二二')
ws.end();

rs.pipe(fs.createWriteStream('copied.txt'))