const Adset = require('../index');
const set = new Adset();
for (let i = 0; i < 10; i++) {
    set.add(`Test ${i}`);
}
const map = set.access();
const obj = Array.from(map).reduce((main, [key, value]) => {
    main[key] = value;
    return main;
}, {});

console.log(obj);