# setStorage

Set a value in the local storage.

## Usage

```js
import { setStorage } from "essentials-utils";

setStorage("name", "Wesley");
```

## Type Declarations

::: details Show type declarations

```ts
export declare function setStorage<TValue = unknown>(
  key: string,
  value: TValue,
): void;
```

:::
