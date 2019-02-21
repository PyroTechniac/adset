const Adset = require('../index');
const set = new Adset();
console.log(set._array);
for (let i = 0; i < 100; i++) {
    set.add(`${i}`);
}
const rand = set.random(7);
console.log(rand);