# colorLog

Log a message in the console with color.

## Usage

```js
import { colorLog } from "essentials-utils";

console.log(colorLog("Hello world", { color: "red" }));
```

## Type Declarations

::: details Show type declarations

```ts
type IColors =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

export interface ColorLogOptions {
  color: IColors;
  bgColor?: IColors;
  bold?: boolean;
  underline?: boolean;
}

export declare function colorLog(str: string, options: ColorLogOptions): string;
```

:::
