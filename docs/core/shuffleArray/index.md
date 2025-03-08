# shuffleArray

random array method

## Usage

```js
import { shuffleArray } from "essentials-utils";

// called in a component
const arr1 = [1, 2, 3, 4, 5];
const arr2 = shuffleArray(arr1);
console.log("arr2", arr2);
```

## Type Declarations

::: details Show type declarations

```ts
export declare function shuffleArray<TArray = unknown>(
  array: TArray[],
): TArray[];
```

:::
