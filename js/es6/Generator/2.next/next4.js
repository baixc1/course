function wrapper(generatorFunction) {
    return function (...args) {
        let generatorObject = generatorFunction(...args);
        console.log(generatorObject.next());
        return generatorObject;
    };
}

const wrapped = wrapper(function* () {
    console.log('start')
    console.log(`First input: ${yield}`);
    return 'DONE';
});

//Generator
let gen = wrapped()

console.log(gen.next('hello!'))
console.log(gen.next())