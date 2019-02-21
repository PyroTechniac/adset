const Adset = require('../index');
const set = new Adset();

for (let i = 0; i < 1000; i++) {
    set.add(`${i}`);
    set.add(i);
}
console.log(set.find(val => val === 976));