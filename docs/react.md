# React methods

Here will be all the methods that can be used in react.

## useDebounce

Debounce hook is used to minimize backend requests on inputs.

```js
import { useDebounce } from "essentials-utils";

const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 1000);

useEffect(() => {
  console.log(debouncedValue);
}, [debouncedValue]);
```

## useWidth

Get the width of the window.

```js
import { useWidth } from "essentials-utils";

// called in a component
const width = useWidth();
console.log(width);
```

## useHeight

Get the height of the window.

```js
import { useHeight } from "essentials-utils";

// called in a component
const height = useHeight();
console.log(height);
```

## useScroll

Get the scroll position of the window.

```js
import { useScroll } from "essentials-utils";

// called in a component
const scroll = useScroll();
console.log(scroll);
```

## useNow

Get the current time.

```js
import { useNow } from "essentials-utils";

// called in a component
const now = useNow();
console.log(now);
```

## useToggle

Toggle a boolean.

```js
import { useToggle } from "essentials-utils";

// called in a component
const { toggleValue, handleToggleValue } = useToggle();

console.log(toggleValue); // false
handleToggleValue();
console.log(toggleValue); // true
```

## useSecurityStorage

Save data in the local storage with encryption.

```js
import { useSecurityStorage } from "essentials-utils";

// called in a component
const { setStorage, getStorage, removeStorage } = useSecurityStorage();

// save data
setStorage("key", "value");

// get data
const data = getStorage("key");

console.log(data); // value

// remove data
removeStorage("key");
```