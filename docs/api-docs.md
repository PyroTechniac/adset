<a name="Betterset"></a>

## Betterset ⇐ <code>Set</code>
A Better Set with more utility methods

**Kind**: global class  
**Extends**: <code>Set</code>  

* [Betterset](#Betterset) ⇐ <code>Set</code>
    * [new Betterset(iterator)](#new_Betterset_new)
    * [.arrays()](#Betterset+arrays) ⇒ [<code>Betterset</code>](#Betterset)
    * [.strings()](#Betterset+strings) ⇒ [<code>Betterset</code>](#Betterset)
    * [.objects()](#Betterset+objects) ⇒ [<code>Betterset</code>](#Betterset)
    * [.clear()](#Betterset+clear) ⇒ [<code>Betterset</code>](#Betterset)
    * [.numbers()](#Betterset+numbers) ⇒ [<code>Betterset</code>](#Betterset)
    * [.each(fn, thisArg)](#Betterset+each) ⇒ [<code>Betterset</code>](#Betterset)

<a name="new_Betterset_new"></a>

### new Betterset(iterator)
Initializes a new Betterser


| Param | Type | Description |
| --- | --- | --- |
| iterator | <code>Iterator</code> | Any type of iterator |

<a name="Betterset+arrays"></a>

### betterset.arrays() ⇒ [<code>Betterset</code>](#Betterset)
Returns a betterset of all the arrays in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
<a name="Betterset+strings"></a>

### betterset.strings() ⇒ [<code>Betterset</code>](#Betterset)
Returns a betterset of all the strings in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
<a name="Betterset+objects"></a>

### betterset.objects() ⇒ [<code>Betterset</code>](#Betterset)
Returns a betterset of all the objects in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
<a name="Betterset+clear"></a>

### betterset.clear() ⇒ [<code>Betterset</code>](#Betterset)
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) butreturns the old betterset instead of undefined

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
<a name="Betterset+numbers"></a>

### betterset.numbers() ⇒ [<code>Betterset</code>](#Betterset)
Returns a betterset of all the numbers in the set

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  
<a name="Betterset+each"></a>

### betterset.each(fn, thisArg) ⇒ [<code>Betterset</code>](#Betterset)
Identical to [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) butreturns the betterset instead of undefined

**Kind**: instance method of [<code>Betterset</code>](#Betterset)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| thisArg | <code>\*</code> | The argument to use as `this` |

