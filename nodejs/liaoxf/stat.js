'use strict';

var fs = require('fs');

try{
    let stat = fs.statSync('sample.txt')
    console.log(stat)
    console.log(stat.isFile())
    console.log(stat.isDirectory())
}catch(e){
    console.log(e)
}