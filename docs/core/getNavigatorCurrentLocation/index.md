# getNavigatorCurrentLocation

Get the current location of the navigator.

## Usage

```js
import { getNavigatorCurrentLocation } from "essentials-utils";

getNavigatorCurrentLocation().then(location => console.log(location));
```

## Type Declarations

::: details Show type declarations

```ts
export interface GetNavigatorCurrentLocationProps {
  successCallback: PositionCallback;
  errorCallback: PositionErrorCallback;
}

export declare function getNavigatorCurrentLocation({
  successCallback,
  errorCallback,
}: GetNavigatorCurrentLocationProps): Promise<{
  coords: GeolocationCoordinates;
  timestamp: number;
}>;
```

:::
