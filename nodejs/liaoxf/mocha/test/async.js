const assert = require('assert')

const fn = require('../fun/async')

it('#async function', async () => {
    let r = await fn();
    assert.strictEqual(r, 15);
});