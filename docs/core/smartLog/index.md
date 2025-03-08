# smartLog

Log a message in the console.

## Usage

```js
import { smartLog } from "essentials-utils";

const App = () => {
  smartLog("Hello world", App); // [App] - DEBUG: Hello world
};
```

## Type Declarations

::: details Show type declarations

```ts
export declare function smartLog<TValue = unknown>(
  value: TValue,
  currentFunction: Function,
  label?: string,
): void;
```

:::
