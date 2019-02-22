<a name="Adset"></a>

## Adset ⇐ <code>Set</code>
A Advanced Set structure with more utility methods

**Kind**: global class  
**Extends**: <code>Set</code>  

* [Adset](#Adset) ⇐ <code>Set</code>
    * [new Adset([iterator])](#new_Adset_new)
    * [.access()](#Adset+access) ⇒ <code>Map.&lt;String, Array.&lt;\*&gt;&gt;</code>
    * [.array()](#Adset+array) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.arrays()](#Adset+arrays) ⇒ <code>Adset.&lt;Array&gt;</code>
    * [.clear()](#Adset+clear) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.first([amount])](#Adset+first) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.last([amount])](#Adset+last) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.concat(...Adsets)](#Adset+concat) ⇒ [<code>Adset</code>](#Adset)
    * [.strings()](#Adset+strings) ⇒ <code>Adset.&lt;String&gt;</code>
    * [.objects()](#Adset+objects) ⇒ <code>Adset.&lt;Object&gt;</code>
    * [.numbers()](#Adset+numbers) ⇒ <code>Adset.&lt;Number&gt;</code>
    * [.each(fn, [thisArg])](#Adset+each) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.find(fn, [thisArg])](#Adset+find) ⇒ <code>\*</code>
    * [.filter(fn, [thisArg])](#Adset+filter) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.map(fn, [thisArg])](#Adset+map) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.clone()](#Adset+clone) ⇒ [<code>Adset</code>](#Adset)
    * [.random([amount])](#Adset+random) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.get(key)](#Adset+get) ⇒ <code>\*</code>
    * [.seal()](#Adset+seal) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.break()](#Adset+break) ⇒ <code>Adset.&lt;\*&gt;</code>

<a name="new_Adset_new"></a>

### new Adset([iterator])
Initializes a new Adset


| Param | Type | Description |
| --- | --- | --- |
| [iterator] | <code>Iterator</code> | Any type of iterator |

<a name="Adset+access"></a>

### adset.access() ⇒ <code>Map.&lt;String, Array.&lt;\*&gt;&gt;</code>
Creates a new Map object containing the type of value as the key, and an array of every valueas the value

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Map.&lt;String, Array.&lt;\*&gt;&gt;</code> - A map with the typeof value as the key, and an array of values as the value  
<a name="Adset+array"></a>

### adset.array() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the values in this Adset

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the values  
<a name="Adset+arrays"></a>

### adset.arrays() ⇒ <code>Adset.&lt;Array&gt;</code>
Retrieves all the arrays in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;Array&gt;</code> - All the arrays that are in the Adset  
<a name="Adset+clear"></a>

### adset.clear() ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) butreturns the old Adset instead of undefined

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The old set, can be discarded if not needed anymore  
<a name="Adset+first"></a>

### adset.first([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the first value(s) in the Adset

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting fromthe end if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the beginning |

<a name="Adset+last"></a>

### adset.last([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the last value(s) in the Adset. This relies on [array](#Adset+array)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting fromthe beginning if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the end |

<a name="Adset+concat"></a>

### adset.concat(...Adsets) ⇒ [<code>Adset</code>](#Adset)
Combines this Adset with others into a new Set. None of the Adsets are modified

**Kind**: instance method of [<code>Adset</code>](#Adset)  

| Param | Type | Description |
| --- | --- | --- |
| ...Adsets | [<code>Adset</code>](#Adset) | Adsets to merge |

**Example**  
```js
const newSet = someSet.concat(someOtherSet, anotherSet, ohBoyASet);
```
<a name="Adset+strings"></a>

### adset.strings() ⇒ <code>Adset.&lt;String&gt;</code>
Retrieves all the strings in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;String&gt;</code> - All the strings that are in the Adset  
<a name="Adset+objects"></a>

### adset.objects() ⇒ <code>Adset.&lt;Object&gt;</code>
Retrieves all the objects in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;Object&gt;</code> - All the objects that are in the Adset  
<a name="Adset+numbers"></a>

### adset.numbers() ⇒ <code>Adset.&lt;Number&gt;</code>
Retrieves all the numbers in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;Number&gt;</code> - All the numbers that are in the Adset  
<a name="Adset+each"></a>

### adset.each(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) butreturns the Adset instead of undefined

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+find"></a>

### adset.find(fn, [thisArg]) ⇒ <code>\*</code>
Searches for a single value where a given function returns truthy, similar to[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> - The argument found, undefined if nothing returned truthy  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+filter"></a>

### adset.filter(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)but returns an Adset instead of an Array

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The adset after the filter was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+map"></a>

### adset.map(fn, [thisArg]) ⇒ <code>Array.&lt;\*&gt;</code>
Exactly the same as [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - The array after mapping  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function that produces an element of the new array, taking two arguments |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+clone"></a>

### adset.clone() ⇒ [<code>Adset</code>](#Adset)
Creates an identical copy of the Set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Example**  
```js
const newSet = oldSet.clone();
```
<a name="Adset+random"></a>

### adset.random([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains unique random value(s) from the Adset, this relies on [array](#Adset+array)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided or an array of values  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to randomly obtain |

<a name="Adset+get"></a>

### adset.get(key) ⇒ <code>\*</code>
Returns a value from the first object in the Adset where the key is a key in the object

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> - The value that the first object held the key for  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>\*</code> | The key to grab the value from |

<a name="Adset+seal"></a>

### adset.seal() ⇒ <code>Adset.&lt;\*&gt;</code>
Seals an Adset, preventing further modification in any way until unsealed with the [break](#Adset+break) method

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset, after being sealed  
<a name="Adset+break"></a>

### adset.break() ⇒ <code>Adset.&lt;\*&gt;</code>
Breaks a seal, allowing the Adset to be modified again, does nothing if the Adset wasn't sealed

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset, after being unsealed  
