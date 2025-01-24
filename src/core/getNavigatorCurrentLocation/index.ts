import { GetNavigatorCurrentLocationProps } from "./models/get-navigator-current-location.models";

export const getNavigatorCurrentLocation = async ({
  successCallback,
  errorCallback,
}: GetNavigatorCurrentLocationProps) => {
  const { coords, timestamp }: GeolocationPosition = await new Promise(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });

  return { coords, timestamp };
};
