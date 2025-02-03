# deepClone

Clone an item.

## Usage

```js
import { deepClone } from "essentials-utils";

const obj = { a: 1, b: 2 };
const obj2 = deepClone(obj); // { a: 1, b: 2 }
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function deepClone<TItem = unknown>(item: TItem): TItem;
```
</details>
