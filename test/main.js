const Adset = require('../index');
const set = new Adset();
for (let i = 0; i < 10; i++) {
    set.add(`Test ${i}`);
}
set.store();