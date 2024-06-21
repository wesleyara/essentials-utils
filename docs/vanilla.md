# Vanilla methods

Here will be all the methods that can be used in vanilla javascript/typescript and also in react.

## upperFirst

Capitalize the first letter of the string.

```js
import { upperFirst } from "essentials-utils";

upperFirst("hello world"); // Hello world
```

## generateArray

Generates an array of numbers.

```js
import { generateArray } from "essentials-utils";

generateArray(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## navigateHandler

Navigate to a specific route.

```js
import { navigateHandler } from "essentials-utils";

navigateHandler("/home", false);
// Navigate to /home

navigateHandler("/home", true);
// Navigate to /home in a new tab
```

## fetcher

Fetch data from an API.

```js
import { fetcher } from "essentials-utils";

fetcher("https://api.github.com/users/wesleyara")
  .then(response => console.log(response))
  .catch(error => console.log(error));

// or

const response = await fetcher("https://api.github.com/users/wesleyara");
console.log(response);
```

## delay

Delay the execution of a function.

```js
import { delay } from "essentials-utils";

delay(1000).then(() => console.log("Hello world"));

// or

await delay(1000);
```

## reverseString

Reverse a string.

```js
import { reverseString } from "essentials-utils";

reverseString("Hello world"); // dlrow olleH
```

## arrayEquals

Check if two arrays are equal.

```js
import { arrayEquals } from "essentials-utils";

arrayEquals([1, 2, 3], [1, 2, 3]); // true
```

## arrayToObject

Convert an array to an object.

```js
import { arrayToObject } from "essentials-utils";

arrayToObject(
  [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ],
  "id",
); // { 1: { id: 1, name: "a" }, 2: { id: 2, name: "b" } }
```

## removeArrayItemByValue

Remove an item from an array.

```js
import { removeArrayItemByValue } from "essentials-utils";

removeArrayItemByValue([1, 2, 3], 2); // [1, 3]
```

## removeArrayItemByIndex

Remove an item from an array by index.

```js
import { removeArrayItemByIndex } from "essentials-utils";

removeArrayItemByIndex([1, 2, 3], 1); // [1, 3]
```

## objectToArray

Convert an object to an array.

```js
import { objectToArray } from "essentials-utils";

objectToArray({ a: 1, b: 2 }); // [{ a: 1 }, { b: 2 }]
```

## currentRouter

Get the current route.

```js
import { currentRouter } from "essentials-utils";

const router = currentRouter();
console.log(router.pathname); // /home
```

## smartLog

Log a message in the console.

```js
import { smartLog } from "essentials-utils";

const App = () => {
  smartLog("Hello world", App); // [App] - DEBUG: Hello world
};
```

## isEmptyObject

Check if an object is empty.

```js
import { isEmptyObject } from "essentials-utils";

isEmptyObject({}); // true
```

## shuffleArray

random array method

```js
import { shuffleArray } from "essentials-utils";

// called in a component
const arr1 = [1, 2, 3, 4, 5];
const arr2 = shuffleArray(arr1);
console.log("arr2", arr2);
```

## generateRandomNumber

Generate a random number.

```js
import { generateRandomNumber } from "essentials-utils";

generateRandomNumber(1, 10); // 5
```

## getPercentage

Get the percentage of a number.

```js
import { getPercentage } from "essentials-utils";

getPercentage(10, 100); // 10
```

## deepClone

Clone an item.

```js
import { deepClone } from "essentials-utils";

const obj = { a: 1, b: 2 };
const obj2 = deepClone(obj); // { a: 1, b: 2 }
```

## arrayLastItem

Get the last item of an array.

```js
import { arrayLastItem } from "essentials-utils";

arrayLastItem([1, 2, 3]); // 3
```

## generateNullArray

Generate an array with null values.

```js
import { generateNullArray } from "essentials-utils";

generateNullArray(5); // [null, null, null, null, null]
```

## generateRandomString

Generate a random string.

```js
import { generateRandomString } from "essentials-utils";

generateRandomString(5); // 5f2d1
```

## generateRandomColor

Generate a random color.

```js
import { generateRandomColor } from "essentials-utils";

generateRandomColor(); // #f2d1a5
```

## setStorage

Set a value in the local storage.

```js
import { setStorage } from "essentials-utils";

setStorage("name", "Wesley");
```

## getStorage

Get a value from the local storage.

```js
import { getStorage } from "essentials-utils";

getStorage("name"); // Wesley
```

## removeStorage

Remove a value from the local storage.

```js
import { removeStorage } from "essentials-utils";

removeStorage("name");
```

## getNavigatorCurrentLocation

Get the current location of the navigator.

```js
import { getNavigatorCurrentLocation } from "essentials-utils";

getNavigatorCurrentLocation().then((location) => console.log(location));
```

## phoneMask

Mask a phone number.

```js
import { phoneMask } from "essentials-utils";

phoneMask("1234567890"); // (12) 3456-7890
```

## cpfMask

Mask a CPF number.

```js
import { cpfMask } from "essentials-utils";

cpfMask("12345678900"); // 123.456.789-00
```

## cnpjMask

Mask a CNPJ number.

```js
import { cnpjMask } from "essentials-utils";

cnpjMask("12345678900000"); // 12.345.678/9000-00
```

## cepMask

Mask a CEP number.

```js 
import { cepMask } from "essentials-utils";

cepMask("12345678"); // 12345-678
```
