# useDebounce

Debounce hook is used to minimize backend requests on inputs.

## Usage

```js
import { useDebounce } from "essentials-utils";

const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 1000);

useEffect(() => {
  console.log(debouncedValue);
}, [debouncedValue]);
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function useDebounce<TValue = unknown>(value: TValue, delay: number): T;
```
</details>