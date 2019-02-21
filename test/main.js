const Adset = require('../index');
const set = new Adset();
for (let i = 0; i < 10; i++) {
    set.add(i);
}
set.seal();
console.log(set);
set.break();
set.clear();
console.log(set);