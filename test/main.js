const Adset = require('../index');
const set = new Adset();
set
    .add('Test 1')
    .add('Test 2')
    .add('Test 3')
    .add(1)
    .add(2)
    .add(3)
    .add(['Test 1', 'Test 2', 'Test 3'])
    .add(['Test 4', 'Test 5', 'Test 6'])
    .add({ name: 'Test 1' })
    .add({ name: 'Test 2' })
    .add({ name: 'Test 3' });
console.log(set);
console.log(set.strings());