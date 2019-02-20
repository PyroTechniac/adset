const _ = require('lodash');

const Err = require('./error');

const pkgdata = require('../package.json');
/**
 * A Better Set with more utility methods
 * @extends {Set}
 */
class Betterset extends Set {
    /**
     * Initializes a new Betterser
     * @param {Iterator} iterator Any type of iterator
     */
    constructor(iterator) {
        super(iterator);
    }
    /**
     * Returns a betterset of all the arrays in the set
     * @returns {Betterset}
     */
    arrays() {
        const results = new this.constructor();
        for (const val of this) {
            if (val instanceof Array) results.add(val);
        }
        return results;
    }
    /**
     * Returns a betterset of all the strings in the set
     * @returns {Betterset}
     */
    strings() {
        const results = new this.constructor();
        for (const val of this) {
            if (val instanceof String) results.add(val);
        }
        return results;
    }
    /**
     * Returns a betterset of all the objects in the set
     * @returns {Betterset}
     */
    objects() {
        const results = new this.constructor();
        for (const val of this) {
            if (val instanceof Object && val.constructor === Object) results.add(val);
        }
        return results;
    }
    /**
     * Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) but
     * returns the old betterset instead of undefined
     * @returns {Betterset}
     */
    clear() {
        const set = new this.constructor(this);
        super.clear();
        return set;
    }
    /**
     * Returns a betterset of all the numbers in the set
     * @returns {Betterset}
     */
    numbers() {
        const results = new this.constructor();
        for (const val of this) {
            if (typeof val === 'number') results.add(val);
        }
        return results;
    }
    /**
     * Identical to [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) but
     * returns the betterset instead of undefined
     * @param {Function} fn The function to run
     * @param {*} thisArg The argument to use as `this`
     * @returns {Betterset}
     */
    each(fn, thisArg) {
        this.forEach(fn, thisArg);
        return this;
    }
}
module.exports = Betterset;