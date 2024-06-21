# Vanilla methods

Here will be all the methods that can be used in vanilla javascript/typescript and also in react.

## upperFirst

Capitalize the first letter of the string.

```js
import { upperFirst } from "@utils/hub";

upperFirst("hello world"); // Hello world
```

## generateArray

Generates an array of numbers.

```js
import { generateArray } from "@utils/hub";

generateArray(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## navigateHandler

Navigate to a specific route.

```js
import { navigateHandler } from "@utils/hub";

navigateHandler("/home", false);
// Navigate to /home

navigateHandler("/home", true);
// Navigate to /home in a new tab
```

## fetcher

Fetch data from an API.

```js
import { fetcher } from "@utils/hub";

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
import { delay } from "@utils/hub";

delay(1000).then(() => console.log("Hello world"));

// or

await delay(1000);
```

## reverseString

Reverse a string.

```js
import { reverseString } from "@utils/hub";

reverseString("Hello world"); // dlrow olleH
```

## arrayEquals

Check if two arrays are equal.

```js
import { arrayEquals } from "@utils/hub";

arrayEquals([1, 2, 3], [1, 2, 3]); // true
```

## arrayToObject

Convert an array to an object.

```js
import { arrayToObject } from "@utils/hub";

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
import { removeArrayItemByValue } from "@utils/hub";

removeArrayItemByValue([1, 2, 3], 2); // [1, 3]
```

## removeArrayItemByIndex

Remove an item from an array by index.

```js
import { removeArrayItemByIndex } from "@utils/hub";

removeArrayItemByIndex([1, 2, 3], 1); // [1, 3]
```

## objectToArray

Convert an object to an array.

```js
import { objectToArray } from "@utils/hub";

objectToArray({ a: 1, b: 2 }); // [{ a: 1 }, { b: 2 }]
```

## currentRouter

Get the current route.

```js
import { currentRouter } from "@utils/hub";

const router = currentRouter();
console.log(router.pathname); // /home
```

## smartLog

Log a message in the console.

```js
import { smartLog } from "@utils/hub";

const App = () => {
  smartLog("Hello world", App); // [App] - DEBUG: Hello world
};
```

## isEmptyObject

Check if an object is empty.

```js
import { isEmptyObject } from "@utils/hub";

isEmptyObject({}); // true
```

## shuffleArray

random array method

```js
import { shuffleArray } from "@utils/hub";

// called in a component
const arr1 = [1, 2, 3, 4, 5];
const arr2 = shuffleArray(arr1);
console.log("arr2", arr2);
```

## generateRandomNumber

Generate a random number.

```js
import { generateRandomNumber } from "@utils/hub";

generateRandomNumber(1, 10); // 5
```

## getPercentage

Get the percentage of a number.

```js
import { getPercentage } from "@utils/hub";

getPercentage(10, 100); // 10
```

## deepClone

Clone an item.

```js
import { deepClone } from "@utils/hub";

const obj = { a: 1, b: 2 };
const obj2 = deepClone(obj); // { a: 1, b: 2 }
```

## arrayLastItem

Get the last item of an array.

```js
import { arrayLastItem } from "@utils/hub";

arrayLastItem([1, 2, 3]); // 3
```

## generateNullArray

Generate an array with null values.

```js
import { generateNullArray } from "@utils/hub";

generateNullArray(5); // [null, null, null, null, null]
```

## generateRandomString

Generate a random string.

```js
import { generateRandomString } from "@utils/hub";

generateRandomString(5); // 5f2d1
```

## generateRandomColor

Generate a random color.

```js
import { generateRandomColor } from "@utils/hub";

generateRandomColor(); // #f2d1a5
```

## setStorage

Set a value in the local storage.

```js
import { setStorage } from "@utils/hub";

setStorage("name", "Wesley");
```

## getStorage

Get a value from the local storage.

```js
import { getStorage } from "@utils/hub";

getStorage("name"); // Wesley
```

## removeStorage

Remove a value from the local storage.

```js
import { removeStorage } from "@utils/hub";

removeStorage("name");
```

## getNavigatorCurrentLocation

Get the current location of the navigator.

```js
import { getNavigatorCurrentLocation } from "@utils/hub";

getNavigatorCurrentLocation().then((location) => console.log(location));
```

## phoneMask

Mask a phone number.

```js
import { phoneMask } from "@utils/hub";

phoneMask("1234567890"); // (12) 3456-7890
```

## cpfMask

Mask a CPF number.

```js
import { cpfMask } from "@utils/hub";

cpfMask("12345678900"); // 123.456.789-00
```

## cnpjMask

Mask a CNPJ number.

```js
import { cnpjMask } from "@utils/hub";

cnpjMask("12345678900000"); // 12.345.678/9000-00
```

## cepMask

Mask a CEP number.

```js 
import { cepMask } from "@utils/hub";

cepMask("12345678"); // 12345-678
```
