const { forEach, map } = require('./index');
const assert = require('assert');

const test = (desc, func) => {
    console.log('----- ', desc);

    try {
        func();
    } catch (e) {
        console.log(e.message)
    }
}

test('for each function', () => {
    let sum = 0;
    forEach([1,2,3], (val, i) => {
        sum += val;
    });

    assert.strictEqual(sum, 6)
})

test('map function', () => {
    const result = map([1,2,3], value => {
        return value * 2
    })
    
    assert.deepStrictEqual(result, [2,4,6]);
})