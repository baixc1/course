Promise.resolve(1).then(() => Promise.reject(1)).then(
    a => console.log('1res', a),
    a => console.log('1rej', a),
)

Promise.resolve(1).then(() => Promise.resolve(1)).then(
    a => console.log('2res', a),
    a => console.log('2rej', a),
)

Promise.reject(1).then(() => Promise.resolve(1)).then(
    a => console.log('3res', a),
    a => console.log('3rej', a),
)