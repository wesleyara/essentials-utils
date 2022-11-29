# Vanilla methods

Here will be all the methods that can be used in vanilla javascript/typescript and also in react.

## upperFirst

Capitalize the first letter of the string.

```js
import { upperFirst } from "utils-react";

upperFirst("hello world"); // Hello world
```

## generateArray

Generates an array of numbers.

```js
import { generateArray } from "utils-react";

generateArray(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## navigateHandler

Navigate to a specific route.

```js
import { navigateHandler } from "utils-react";

navigateHandler("/home", false);
// Navigate to /home

navigateHandler("/home", true);
// Navigate to /home in a new tab
```

## fetchRequest

Fetch data from an API.

```js
import { fetchRequest } from "utils-react";

fetchRequest("https://api.github.com/users/wesleyara")
  .then(response => console.log(response))
  .catch(error => console.log(error));

// or

const response = await fetchRequest("https://api.github.com/users/wesleyara");
console.log(response);
```

## delay

Delay the execution of a function.

```js
import { delay } from "utils-react";

delay(1000).then(() => console.log("Hello world"));

// or

await delay(1000);
```

## reverseString

Reverse a string.

```js
import { reverseString } from "utils-react";

reverseString("Hello world"); // dlrow olleH
```

## arrayEquals

Check if two arrays are equal.

```js
import { arrayEquals } from "utils-react";

arrayEquals([1, 2, 3], [1, 2, 3]); // true
```

## arrayToObject

Convert an array to an object.

```js
import { arrayToObject } from "utils-react";

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
import { removeArrayItemByValue } from "utils-react";

removeArrayItemByValue([1, 2, 3], 2); // [1, 3]
```

## removeArrayItemByIndex

Remove an item from an array by index.

```js
import { removeArrayItemByIndex } from "utils-react";

removeArrayItemByIndex([1, 2, 3], 1); // [1, 3]
```

## objectToArray

Convert an object to an array.

```js
import { objectToArray } from "utils-react";

objectToArray({ a: 1, b: 2 }); // [{ a: 1 }, { b: 2 }]
```

## currentRouter

Get the current route.

```js
import { currentRouter } from "utils-react";

const router = currentRouter();
console.log(router.pathname); // /home
```
