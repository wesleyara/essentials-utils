# delay

Delay the execution of a function.

## Using then

```js
import { delay } from "essentials-utils";

delay(1000).then(() => console.log("Hello world"));
```

## Using async/await

```js
import { delay } from "essentials-utils";

async function main() {
  await delay(1000);
  console.log("Hello world");
}
```