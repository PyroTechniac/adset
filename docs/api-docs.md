<a name="Adset"></a>

## Adset ⇐ <code>Set</code>
A Better Set with more utility methods

**Kind**: global class  
**Extends**: <code>Set</code>  

* [Adset](#Adset) ⇐ <code>Set</code>
    * [new Adset(iterator)](#new_Adset_new)
    * [.arrays()](#Adset+arrays) ⇒ <code>Adset.&lt;Array&gt;</code>
    * [.clear()](#Adset+clear) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.concat(...Adsets)](#Adset+concat) ⇒ [<code>Adset</code>](#Adset)
    * [.strings()](#Adset+strings) ⇒ <code>Adset.&lt;String&gt;</code>
    * [.objects()](#Adset+objects) ⇒ <code>Adset.&lt;Object&gt;</code>
    * [.numbers()](#Adset+numbers) ⇒ <code>Adset.&lt;Number&gt;</code>
    * [.each(fn, [thisArg])](#Adset+each) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.map(fn, [thisArg])](#Adset+map) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.clone()](#Adset+clone) ⇒ [<code>Adset</code>](#Adset)

<a name="new_Adset_new"></a>

### new Adset(iterator)
Initializes a new Betterser


| Param | Type | Description |
| --- | --- | --- |
| iterator | <code>Iterator</code> | Any type of iterator |

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
