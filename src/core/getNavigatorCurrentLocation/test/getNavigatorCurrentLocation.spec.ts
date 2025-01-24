import { describe, it, expect, vi } from "vitest";

import { getNavigatorCurrentLocation } from "../";

describe("getNavigatorCurrentLocation", () => {
  it("should be defined", () => {
    expect(getNavigatorCurrentLocation).toBeDefined();
  });

  it("get current location", async () => {
    const mockSuccessCallback = vi.fn();
    const mockErrorCallback = vi.fn();
    const mockToJSON = vi.fn();

    if (!global.navigator.geolocation) {
      return;
    }

    global.navigator.geolocation.getCurrentPosition = vi.fn(success => {
      success({
        coords: {
          latitude: 10,
          longitude: 20,
          accuracy: 1,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
          toJSON: mockToJSON,
        },
        timestamp: 123,
        toJSON: mockToJSON,
      });
    });

    const result = await getNavigatorCurrentLocation({
      successCallback: mockSuccessCallback,
      errorCallback: mockErrorCallback,
    });

    expect(result).toEqual({
      coords: {
        latitude: 10,
        longitude: 20,
        accuracy: 1,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: 123,
    });
  });

  it("get current location", async () => {
    const mockSuccessCallback = vi.fn();
    const mockErrorCallback = vi.fn();
    const mockToJSON = vi.fn();

    if (!global.navigator.geolocation) {
      return;
    }

    global.navigator.geolocation.getCurrentPosition = vi.fn(success => {
      success({
        coords: {
          latitude: 10,
          longitude: 20,
          accuracy: 1,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
          toJSON: mockToJSON,
        },
        timestamp: 123,
        toJSON: mockToJSON,
      });
    });

    const result = await getNavigatorCurrentLocation({
      successCallback: mockSuccessCallback,
      errorCallback: mockErrorCallback,
    });

    expect(result).toEqual({
      coords: {
        latitude: 10,
        longitude: 20,
        accuracy: 1,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: 123,
    });
  });
});
