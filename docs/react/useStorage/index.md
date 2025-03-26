# useStorage

`useStorage` is a React hook that allows you to store a value in the browser's local storage. This hook is useful when you want to persist a value across page reloads and multi tabs synchronization.

## Usage

```js
import { useStorage } from "essentials-utils/react";

const App = () => {
  const [count, setCount] = useStorage("count", 0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <p>{count}</p>
    </div>
  );
};
```

## Type Declarations

::: details Show type declarations

```ts
export declare function useStorage<TValue = unknown>(
  key: string,
  delay: TValue,
): readonly [TValue, React.Dispatch<React.SetStateAction<TValue>>];
```

:::
