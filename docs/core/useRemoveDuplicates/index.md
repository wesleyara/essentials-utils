# useRemoveDuplicates

Remove duplicates from a array, you can define with keys you want to prevent to stack and count how many duplicates you have.

## Usage

### Remove duplicates from a array

```js
import { useRemoveDuplicates } from "essentials-utils";

const arrayFullOfDuplicates = [1, 2, 2, 3, 4, 4, 5];
const noDuplicateArray = useRemoveDuplicates(arrayFullOfDuplicates);

console.log(noDuplicateArray); // [1, 2, 3, 4, 5]
```

### Remove duplicates from a array of objects

```ts
import { useRemoveDuplicates } from "essentials-utils";

const arrayFullOfDuplicates = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 3, name: "Doe" },
  { id: 2, name: "Jane" },
];

const options = {
  isObject: true,
  anchorKeys: ["id"],
  counts: true,
};

const noDuplicateArray = useRemoveDuplicates(arrayFullOfDuplicates, options);

console.log(noDuplicateArray);
// [
//   { id: 1, name: "John", _quantity: 2 },
//   { id: 2, name: "Jane", _quantity: 2 },
//   { id: 3, name: "Doe", _quantity: 1 },
// ]
```

## Type Declarations

::: details Show type declarations

```ts
type AnchorKeysType<TArray> = keyof TArray | (keyof TArray)[];

export interface RemoveDuplicatesOptions<TArray = unknown> {
  isObject: boolean;
  anchorKeys: AnchorKeysType<TArray>;
  counts: boolean;
}

export declare function useRemoveDuplicates<TArray = unknowm>(
  array: TArray[],
  options?: Partial<RemoveDuplicatesOptions<TArray>>,
): TArray[];
```

:::
