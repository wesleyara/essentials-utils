# delay

Delay the execution of a function.

## Usage

### Using then/catch

```js
import { delay } from "essentials-utils";

delay(1000).then(() => console.log("Hello world"));
```

### Using async/await

```js
import { delay } from "essentials-utils";

async function main() {
  await delay(1000);
  console.log("Hello world");
}
```

## Type Declarations

<details>
  <summary class="italic cursor-pointer">Show Type Declarations</summary>

```ts
export declare function delay(ms: number): Promise<void>;
```
</details>