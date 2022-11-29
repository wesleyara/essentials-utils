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
