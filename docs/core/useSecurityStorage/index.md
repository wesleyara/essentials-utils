# useSecurityStorage

Save data in the local storage with encryption.

## Usage

```js
import { useSecurityStorage } from "essentials-utils";

const { setStorage, getStorage, removeStorage } = useSecurityStorage({
  secret: import.meta.env.VITE_SECRET,
});
```

### Save data

```js
setStorage("key", "value");
```

### Get data

```js
const data = getStorage("key");

console.log(data); // value
```

### Remove data

```js
removeStorage("key");
```

## Type Declarations

::: details Show type declarations

```ts
interface SecurityStorageOptions {
  secret: string;
}

export declare function useSecurityStorage<TValue = unknown>(
  options: SecurityStorageOptions,
): {
  setStorage: (key: string, value: TValue) => void;
  getStorage: (key: string) => TValue | null;
  removeStorage: (key: string) => void;
};
```

:::
