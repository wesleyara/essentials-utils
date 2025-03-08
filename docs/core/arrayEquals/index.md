# arrayEquals

Check if two arrays are equal.

## Usage

```js
import { arrayEquals } from "essentials-utils";

arrayEquals([1, 2, 3], [1, 2, 3]); // true
```

## Type Declarations

::: details Show type declarations

```ts
export declare function arrayEquals<TArray = unknown>(
  array1: TArray[],
  array2: TArray[],
): boolean;
```

:::
