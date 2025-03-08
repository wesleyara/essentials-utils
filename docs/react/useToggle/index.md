# useToggle

Toggle a boolean.

## Usage

```js
import { useToggle } from "essentials-utils/react";

// called in a component
const { toggleValue, handleToggleValue } = useToggle();

console.log(toggleValue); // false
handleToggleValue();
console.log(toggleValue); // true
```

## Type Declarations

::: details Show type declarations

```ts
export declare function useToggle(initialValue: boolean): {
  toggleValue: boolean;
  handleToggleValue: () => void;
};
```

:::
