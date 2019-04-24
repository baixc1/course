
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'Hello webpack1';

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());