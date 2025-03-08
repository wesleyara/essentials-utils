# removeArrayItemByValue

Remove an item from an array.

## Usage

```js
import { removeArrayItemByValue } from "essentials-utils";

removeArrayItemByValue([1, 2, 3], 2); // [1, 3]
```

## Type Declarations

::: details Show type declarations

```ts
export declare function removeArrayItemByValue<TArray = unknown>(
  array: TArray[],
  value: TArray,
): TArray[];
```

:::
