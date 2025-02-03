# shuffleArray

random array method

## Usage

```js
import { shuffleArray } from "essentials-utils";

// called in a component
const arr1 = [1, 2, 3, 4, 5];
const arr2 = shuffleArray(arr1);
console.log("arr2", arr2);
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function shuffleArray<TArray = unknown>(
  array: TArray[],
): TArray[];
```
</details>
