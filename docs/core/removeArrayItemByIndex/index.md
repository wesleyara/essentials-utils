# removeArrayItemByIndex

Remove an item from an array by index.

## Usage

```js
import { removeArrayItemByIndex } from "essentials-utils";

removeArrayItemByIndex([1, 2, 3], 1); // [1, 3]
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function removeArrayItemByIndex<TArray = unknown>(
  array: TArray[],
  index: number,
): TArray[];
```
</details>