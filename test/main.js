const Adset = require('../index');
const set = new Adset();
for (let i = 1; i < 11; i++) {
    set.add(`Test ${i}`);
    set.add(i);
    set.add([i]);
    set.add({ i: `${i}` });
}
const parsed = set.parse();
console.log(parsed);