# arrayToObject

Convert an array to an object.

## Usage

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

## Type Declarations

::: details Show type declarations

```ts
export declare function arrayToObject<TArray = unknown>(
  array: TArray[],
  key: string,
): Record<string, TArray>;
```

:::
