const Enmap = require('enmap');

const Err = require('./error');

const pkgdata = require('../package.json');
/**
 * A Advanced Set structure with more utility methods
 * @extends {Set}
 */
class Adset extends Set {
    /**
     * Initializes a new Adset
     * @param {Iterator} [iterator] Any type of iterator
     */
    constructor(iterator) {
        super(iterator);
        /**
         * Cached array for the `array()` method, will be reset to null whenever `add()` or `delete()` are called
         * @name Adset#_array
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true });

        /**
         * Whether the Adset is sealed or not, if true, the Adset cannot be modified in any way
         * @type {Boolean}
         * @private
         */
        Object.defineProperty(this, 'sealed', { value: false, writable: true, configurable: false });
    }

    /**
     * Creates a new {@link https://github.com/eslachance/enmap Enmap} object containing the type of value as the key, and an array of every value
     * as the value
     * @returns {Enmap<String, Array>} A map with the typeof value as the key, and an array of values as the value
     */
    access() {
        const stringArray = new Array();
        const numberArray = new Array();
        const arrayArray = new Array();
        const objectArray = new Array();
        const stringSet = this.strings();
        const numberSet = this.numbers();
        const arraySet = this.arrays();
        const objectSet = this.objects();
        for (const val of stringSet) stringArray.push(val);
        for (const val of numberSet) numberArray.push(val);
        for (const val of arraySet) arrayArray.push(val);
        for (const val of objectSet) objectArray.push(val);
        const stringIterator = ['Strings', stringArray];
        const numberIterator = ['Numbers', numberArray];
        const arrayIterator = ['Arrays', arrayArray];
        const objectIterator = ['Objects', objectArray];
        const mainIterator = [stringIterator, numberIterator, arrayIterator, objectIterator];
        return new Enmap(mainIterator);
    }

    /**
     * Returns an ordered array of all the values in this Adset
     * @returns {Array<*>} An array of the values
     */
    array() {
        if (!this._array || this._array.length !== this.size) this._array = [...this.values()];
        return this._array;
    }

    add(val) {
        if (this.sealed) throw new Err('The Adset is sealed, and cannot be modified', 'AdsetSealedError');
        this._array = null;
        return super.add(val);
    }

    delete(val) {
        if (this.sealed) throw new Err('The Adset is sealed, and cannot be modified', 'AdsetSealedError');
        this._array = null;
        return super.delete(val);
    }

    /**
     * Retrieves all the arrays in the set
     * @returns {Adset<Array>} All the arrays that are in the Adset
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
     * returns the old Adset instead of undefined
     * @returns {Adset<*>} The old set, can be discarded if not needed anymore
     */
    clear() {
        if (this.sealed) throw new Err('The Adset is sealed, and cannot be modified', 'AdsetSealedError');
        const set = new this.constructor(this);
        super.clear();
        return set;
    }

    /**
     * Obtains the first value(s) in the Adset
     * @param {number} [amount] Amount of values to obtain from the beginning
     * @returns {*|Array<*>} A single value if no amount is provided, or an array of values, starting from
     * the end if the amount is negative
     */
    first(amount) {
        if (typeof amount === 'undefined') return this.values().next().value;
        if (amount < 0) return this.last(amount * -1);
        amount = Math.min(this.size, amount);
        const arr = new Array(amount);
        const iter = this.values();
        for (let i = 0; i < amount; i++) arr[i] = iter.next().value;
        return arr;
    }

    /**
     * Obtains the last value(s) in the Adset. This relies on {@link Adset#array}
     * @param {number} [amount] Amount of values to obtain from the end
     * @returns {*|Array<*>} A single value if no amount is provided, or an array of values, starting from
     * the beginning if the amount is negative
     */
    last(amount) {
        const arr = this.array();
        if (typeof amount === 'undefined') return arr[arr.length - 1];
        if (amount < 0) return this.first(amount * -1);
        if (!amount) return [];
        return arr.slice(-amount);
    }

    /**
     * Combines this Adset with others into a new Set. None of the Adsets are modified
     * @param {...Adset} Adsets Adsets to merge
     * @returns {Adset}
     * @example const newSet = someSet.concat(someOtherSet, anotherSet, ohBoyASet);
     */
    concat(...Adsets) {
        const newSet = this.clone();
        for (const set of Adsets) {
            for (const val of set) newSet.add(val);
        }
        return newSet;
    }

    /**
     * Retrieves all the strings in the set
     * @returns {Adset<String>} All the strings that are in the Adset
     */
    strings() {
        const results = new this.constructor();
        for (const val of this) {
            if (val.constructor === String) results.add(val);
        }
        return results;
    }

    /**
     * Retrieves all the objects in the set
     * @returns {Adset<Object>} All the objects that are in the Adset
     */
    objects() {
        const results = new this.constructor();
        for (const val of this) {
            if (val instanceof Object && val.constructor === Object) results.add(val);
        }
        return results;
    }

    /**
     * Retrieves all the numbers in the set
     * @returns {Adset<Number>} All the numbers that are in the Adset
     */
    numbers() {
        const results = new this.constructor();
        for (const val of this) {
            if (typeof val === 'number') results.add(val);
        }
        return results;
    }

    /**
     * Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) but
     * returns the Adset instead of undefined
     * @param {Function} fn The function to run
     * @param {*} [thisArg] The argument to use as `this`
     * @returns {Adset<*>} The set after the function was ran
     */
    each(fn, thisArg) {
        if (this.sealed) throw new Err('The Adset is sealed, and cannot be modified', 'AdsetSealedError');
        this.forEach(fn, thisArg);
        return this;
    }

    /**
     * Searches for a single value where a given function returns truthy, similar to
     * [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     * @param {Function} fn The function to execute (should return boolean)
     * @param {*} [thisArg] Argument to use as `this`
     * @returns {*} The argument found, undefined if nothing returned truthy
     */
    find(fn, thisArg) {
        if (typeof thisArg !== 'undefined') fn = fn.bind(thisArg);
        for (const val of this) {
            if (fn(val, val, this)) return val;
        }
        return undefined;
    }

    /**
     * Exactly the same as [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     * but returns an Adset instead of an Array
     * @param {Function} fn The function to execute (should return boolean)
     * @param {*} [thisArg] Argument to use as `this`
     * @returns {Adset<*>} The adset after the filter was ran
     */
    filter(fn, thisArg) {
        if (typeof thisArg !== 'undefined') fn = fn.bind(thisArg);
        const results = new this.constructor[Symbol.species]();
        for (const val of this) {
            if (fn(val, val, this)) results.add(val);
        }
        return results;
    }

    /**
     * Exactly the same as [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     * @param {Function} fn Function that produces an element of the new array, taking two arguments
     * @param {*} [thisArg] The argument to use as `this`
     * @returns {Array<*>} The array after mapping
     */
    map(fn, thisArg) {
        if (thisArg) fn = fn.bind(thisArg);
        const arr = new Array(this.size);
        let i = 0;
        for (const val of this) arr[i++] = fn(val, this);
        return arr;
    }

    /**
     * Creates an identical copy of the Set
     * @returns {Adset}
     * @example const newSet = oldSet.clone();
     */
    clone() {
        return new this.constructor(this);
    }

    /**
     * Obtains unique random value(s) from the Adset, this relies on {@link Adset#array}
     * @param {number} [amount] Amount of values to randomly obtain
     * @returns {*|Array<*>} A single value if no amount is provided or an array of values
     */
    random(amount) {
        let arr = this.array();
        if (typeof amount === 'undefined') return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount) return [];
        const rand = new Array(amount);
        arr = arr.slice();
        for (let i = 0; i < amount; i++) rand[i] = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
        return rand;
    }

    /**
     * Returns a value from the first object in the Adset where the key is a key in the object
     * @param {*} key The key to grab the value from
     * @returns {*} The value that the first object held the key for
     */
    get(key) {
        const objs = this.objects();
        for (const obj of objs) {
            if (Object.keys(obj).includes(`${key}`)) return obj[`${key}`];
        }
        return undefined;
    }

    /**
     * Seals an Adset, preventing further modification in any way until unsealed with the {@link Adset#break} method
     * @returns {Adset<*>} The Adset, after being sealed
     */
    seal() {
        this.sealed = true;
        return this;
    }

    /**
     * Breaks a seal, allowing the Adset to be modified again, does nothing if the Adset wasn't sealed
     * @returns {Adset<*>} The Adset, after being unsealed
     */
    break() {
        this.sealed = false;
        return this;
    }
}

module.exports = Adset;