import _ from 'lodash';
import react from 'react';
import jquery from 'jquery';
// import printMe from './print.js';


function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击这里，然后查看 console！';
    // btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());