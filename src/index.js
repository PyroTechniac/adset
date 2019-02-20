const _ = require('lodash');

const Err = require('./error');

const pkgdata = require('../package.json');

class Betterset extends Set {
    constructor(iterator) {
        super(iterator);
    }
    /**
     * Returns a Betterset of all the arrays in the set
     */
    arrays() {
        const results = new this.constructor();
        for (const val of this) {
            if (val instanceof Array) results.add(val);
        }
        return results;
    }
    /**
     * Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) but
     * returns the old set instead of undefined
     * @returns {Betterset}
     */
    clear() {
        const set = new this.constructor(this);
        super.clear();
        return set;
    }
    /**
     * Identical to [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) but
     * returns the Betterset instead of undefined
     */
    each(fn, thisArg) {
        this.forEach(fn, thisArg);
        return this;
    }
}
module.exports = Betterset;