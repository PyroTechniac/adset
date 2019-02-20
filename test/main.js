const Betterset = require('../src/index');
const set = new Betterset();
set.add(['Test 1', 2]);
set.add(3);
set.add({ name: 'Hello world' });
console.log(set.strings());