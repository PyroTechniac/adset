const Adset = require('../index');
const set = new Adset();
for (let i = 0; i < 10; i++) {
    const obj = {};
    obj[`${i}`] = i;
    set.add(obj);
}
console.log(set.get(4));