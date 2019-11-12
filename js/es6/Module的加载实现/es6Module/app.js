import express from 'express';

class Person {
    say() {
        console.log('hello');
    }
}

let app = express();
app.get('/', (res, req) => {

})
app.listen(3000, (res) => {
    new Person().say();
});