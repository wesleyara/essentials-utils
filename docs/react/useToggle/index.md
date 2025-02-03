# useToggle

Toggle a boolean.

## Usage

```js
import { useToggle } from "essentials-utils";

// called in a component
const { toggleValue, handleToggleValue } = useToggle();

console.log(toggleValue); // false
handleToggleValue();
console.log(toggleValue); // true
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function useToggle(initialValue: boolean): {
    toggleValue: boolean;
    handleToggleValue: () => void;
};
```
</details>