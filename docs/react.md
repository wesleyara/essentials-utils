# React methods

Here will be all the methods that can be used in react.

## useDebounce

Debounce hook is used to minimize backend requests on inputs.

```js
import { useDebounce } from "utils-react";

const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 1000);

useEffect(() => {
  console.log(debouncedValue);
}, [debouncedValue]);
```

## useWidth

Get the width of the window.

```js
import { useWidth } from "utils-react";

// called in a component
const width = useWidth();
console.log(width);
```

## useHeight

Get the height of the window.

```js
import { useHeight } from "utils-react";

// called in a component
const height = useHeight();
console.log(height);
```

## useScroll

Get the scroll position of the window.

```js
import { useScroll } from "utils-react";

// called in a component
const scroll = useScroll();
console.log(scroll);
```
