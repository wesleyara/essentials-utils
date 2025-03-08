# useDebounce

Debounce hook is used to minimize backend requests on inputs.

## Usage

```js
import { useDebounce } from "essentials-utils/react";

const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 1000);

useEffect(() => {
  console.log(debouncedValue);
}, [debouncedValue]);
```

## Type Declarations

::: details Show type declarations

```ts
export declare function useDebounce<TValue = unknown>(
  value: TValue,
  delay: number,
): T;
```

:::
