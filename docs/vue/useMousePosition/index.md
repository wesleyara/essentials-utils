# useMousePosition

Get the current mouse position.

```jsx
import { useMousePosition } from "essentials-utils/vue";

// called in a component
const { x, y } = useMousePosition();

console.log(x, y);
```

## Type Declarations

::: details Show type declarations

```ts
export declare function useMousePosition() {
    x: Ref<number, number>;
    y: Ref<number, number>;
}
```

:::
