<a name="Betterset"></a>

## Betterset ⇐ <code>Set</code>
A Better Set with more utility methods

**Kind**: global class  
**Extends**: <code>Set</code>  

* [Betterset](#Betterset) ⇐ <code>Set</code>
    * [new Betterset(iterator)](#new_Betterset_new)
    * [.arrays()](#Betterset+arrays) ⇒ <code>Betterset.&lt;Array&gt;</code>
    * [.clear()](#Betterset+clear) ⇒ <code>Betterset.&lt;\*&gt;</code>
    * [.concat(...bettersets)](#Betterset+concat) ⇒ [<code>Betterset</code>](#Betterset)
    * [.strings()](#Betterset+strings) ⇒ <code>Betterset.&lt;String&gt;</code>
    * [.objects()](#Betterset+objects) ⇒ <code>Betterset.&lt;Object&gt;</code>
    * [.numbers()](#Betterset+numbers) ⇒ <code>Betterset.&lt;Number&gt;</code>
    * [.each(fn, [thisArg])](#Betterset+each) ⇒ <code>Betterset.&lt;\*&gt;</code>
    * [.map(fn, [thisArg])](#Betterset+map) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.clone()](#Betterset+clone) ⇒ [<code>Betterset</code>](#Betterset)

<a name="new_Betterset_new"></a>

### new Betterset(iterator)
Initializes a new Betterser


| Param | Type | Description |
| --- | --- | --- |
| iterator | <code>Iterator</code> | Any type of iterator |

<a name="Betterset+arrays"></a>

### betterset.arrays() ⇒ <code>Betterset.&lt;Array&gt;</code>
Retrieves all the arrays in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Betterset.&lt;Array&gt;</code> - All the arrays that are in the betterset  
<a name="Betterset+clear"></a>

### betterset.clear() ⇒ <code>Betterset.&lt;\*&gt;</code>
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) butreturns the old betterset instead of undefined

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Betterset.&lt;\*&gt;</code> - The old set, can be discarded if not needed anymore  
<a name="Betterset+concat"></a>

### betterset.concat(...bettersets) ⇒ [<code>Betterset</code>](#Betterset)
Combines this Betterset with others into a new Set. None of the Bettersets are modified

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  

| Param | Type | Description |
| --- | --- | --- |
| ...bettersets | [<code>Betterset</code>](#Betterset) | Bettersets to merge |

**Example**  
```js
const newSet = someSet.concat(someOtherSet, anotherSet, ohBoyASet);
```
<a name="Betterset+strings"></a>

### betterset.strings() ⇒ <code>Betterset.&lt;String&gt;</code>
Retrieves all the strings in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Betterset.&lt;String&gt;</code> - All the strings that are in the betterset  
<a name="Betterset+objects"></a>

### betterset.objects() ⇒ <code>Betterset.&lt;Object&gt;</code>
Retrieves all the objects in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Betterset.&lt;Object&gt;</code> - All the objects that are in the betterset  
<a name="Betterset+numbers"></a>

### betterset.numbers() ⇒ <code>Betterset.&lt;Number&gt;</code>
Retrieves all the numbers in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Betterset.&lt;Number&gt;</code> - All the numbers that are in the betterset  
<a name="Betterset+each"></a>

### betterset.each(fn, [thisArg]) ⇒ <code>Betterset.&lt;\*&gt;</code>
Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) butreturns the betterset instead of undefined

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Betterset.&lt;\*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Betterset+map"></a>

### betterset.map(fn, [thisArg]) ⇒ <code>Array.&lt;\*&gt;</code>
Exactly the same as [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - The array after mapping  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function that produces an element of the new array, taking two arguments |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Betterset+clone"></a>

### betterset.clone() ⇒ [<code>Betterset</code>](#Betterset)
Creates an identical copy of the Set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
**Example**  
```js
const newSet = oldSet.clone();
```
