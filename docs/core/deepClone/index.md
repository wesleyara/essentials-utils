# deepClone

Clone an item.

## Usage

```js
import { deepClone } from "essentials-utils";

const obj = { a: 1, b: 2 };
const obj2 = deepClone(obj); // { a: 1, b: 2 }
```

## Type Declarations

::: details Show type declarations

```ts
export declare function deepClone<TItem = unknown>(item: TItem): TItem;
```

:::
