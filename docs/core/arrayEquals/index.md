# arrayEquals

Check if two arrays are equal.

## Usage

```js
import { arrayEquals } from "essentials-utils";

arrayEquals([1, 2, 3], [1, 2, 3]); // true
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function arrayEquals<TArray = unknown>(
  array1: TArray[],
  array2: TArray[],
): boolean;
```
</details>
