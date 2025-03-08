# useMousePosition

Get the current mouse position.

```jsx
import { useMousePosition } from "essentials-utils/react";

// called in a component
const { x, y } = useMousePosition();

console.log(x, y);
```

## Type Declarations

::: details Show type declarations

```ts
export declare function useMousePosition(): {
  x: number;
  y: number;
};
```

:::
