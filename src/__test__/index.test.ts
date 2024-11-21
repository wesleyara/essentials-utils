/**
 * @jest-environment jsdom
 */

import { describe, expect, it, vitest } from "vitest";

import {
  upperFirst,
  fetcher,
  delay,
  arrayEquals,
  arrayToObject,
  generateArray,
  reverseString,
  removeArrayItemByValue,
  removeArrayItemByIndex,
  objectToArray,
  isEmptyObject,
  shuffleArray,
  generateRandomNumber,
  getPercentage,
  arrayLastItem,
  generateNullArray,
  generateRandomString,
  generateRandomColor,
  getNavigatorCurrentLocation,
  phoneMask,
  cpfMask,
  cnpjMask,
  cepMask,
  colorLog,
  removeDuplicates,
} from "../index";

describe("all methods in the package", () => {
  it("capitalize the first letter of the string.", () => {
    expect(upperFirst("foo")).toBe("Foo");
  });

  it("fetch data from an api.", async () => {
    expect(await fetcher("https://api.github.com/users/wesleyara")).toEqual(
      expect.objectContaining({
        login: "wesleyara",
      }),
    );
  });

  it("delay the execution of a function.", async () => {
    const start = Date.now();
    await delay(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });

  it("check if two arrays are equal.", () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("convert an array to an object.", () => {
    expect(
      arrayToObject(
        [
          { id: 1, name: "a" },
          { id: 2, name: "b" },
        ],
        "id",
      ),
    ).toEqual({
      1: { id: 1, name: "a" },
      2: { id: 2, name: "b" },
    });
  });

  it("generate an array of numbers.", () => {
    expect(generateArray(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("reverse a string.", () => {
    expect(reverseString("foo")).toBe("oof");
  });

  it("remove an item from an array.", () => {
    expect(removeArrayItemByValue([1, 2, 3], 2)).toEqual([1, 3]);
  });

  it("remove an item from an array by index.", () => {
    expect(removeArrayItemByIndex([1, 2, 3], 1)).toEqual([1, 3]);
  });

  it("convert an object to an array.", () => {
    expect(
      objectToArray({
        1: { id: 1, name: "a" },
        2: { id: 2, name: "b" },
      }),
    ).toEqual([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ]);
  });

  it("check if an object is empty.", () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it("randomly sorting arrays.", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = shuffleArray(arr1);
    expect(arr1.some(item => arr2.includes(item))).toBe(true);
  });

  it("generate a random number.", () => {
    expect(generateRandomNumber(1, 10)).toBeGreaterThanOrEqual(1);
    expect(generateRandomNumber(1, 10)).toBeLessThanOrEqual(10);
  });

  it("get the percentage of a number.", () => {
    expect(getPercentage(10, 100)).toBe(10);
  });

  it("get the last item of an array.", () => {
    expect(arrayLastItem([1, 2, 3])).toBe(3);
  });

  it("generate a null array", () => {
    expect(generateNullArray(3)).toEqual([null, null, null]);
  });

  it("generate a random string", () => {
    expect(generateRandomString(10)).toBeTypeOf("string");
  });

  it("generate a random color", () => {
    expect(generateRandomColor()).toBeTypeOf("string");
  });

  it("get current location", async () => {
    const mockSuccessCallback = vitest.fn();
    const mockErrorCallback = vitest.fn();
    const mockToJSON = vitest.fn();

    if (!global.navigator.geolocation) {
      return;
    }

    global.navigator.geolocation.getCurrentPosition = vitest.fn(success => {
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

  it("phone mask", () => {
    expect(phoneMask("11999999999")).toBe("(11) 99999-9999");
  });

  it("cpf mask", () => {
    expect(cpfMask("99999999999")).toBe("999.999.999-99");
  });

  it("cnpj mask", () => {
    expect(cnpjMask("99999999999999")).toBe("99.999.999/9999-99");
  });

  it("cep mask", () => {
    expect(cepMask("99999999")).toBe("99999-999");
  });

  it("color log", () => {
    const mockLog = vitest.fn();
    global.console.log = mockLog;

    mockLog(colorLog("foo", { color: "red" }));

    expect(mockLog).toHaveBeenCalledWith("\x1b[31mfoo\x1b[0m");
  });

  it("remove duplicates from an array of primitives", () => {
    const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
    const result = removeDuplicates(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("remove duplicates from an array of objects", () => {
    const arrayWithDuplicates = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "a" },
      { id: 3, name: "c" },
      { id: 2, name: "b" },
    ];
    const result = removeDuplicates(arrayWithDuplicates, {
      isObject: true,
      anchorKeys: "id",
    });
    expect(result).toEqual([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
    ]);
  });

  it("remove duplicates from an array of objects with counts", () => {
    const arrayWithDuplicates = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "a" },
      { id: 3, name: "c" },
      { id: 2, name: "b" },
    ];
    const result = removeDuplicates(arrayWithDuplicates, {
      isObject: true,
      anchorKeys: "id",
      counts: true,
    });
    expect(result).toEqual([
      { id: 1, name: "a", _quantity: 2 },
      { id: 2, name: "b", _quantity: 2 },
      { id: 3, name: "c", _quantity: 1 },
    ]);
  });

  it("remove duplicates from a large array of objects", () => {
    const arrayWithDuplicates = [
      { id: 1, name: "a" },
      { id: 4, name: "d" },
      { id: 2, name: "b" },
      { id: 4, name: "d" },
      { id: 1, name: "a" },
      { id: 4, name: "d" },
      { id: 3, name: "c" },
      { id: 4, name: "d" },
      { id: 2, name: "b" },
      { id: 4, name: "d" },
    ];
    const result = removeDuplicates(arrayWithDuplicates, {
      isObject: true,
      anchorKeys: "id",
    });
    expect(result).toEqual([
      { id: 1, name: "a" },
      { id: 4, name: "d" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
    ]);
  });

  it("remove duplicates from a large array of objects with counts", () => {
    const arrayWithDuplicates = [
      { id: 4, name: "d" },
      { id: 1, name: "a" },
      { id: 4, name: "d" },
      { id: 2, name: "b" },
      { id: 4, name: "d" },
      { id: 1, name: "a" },
      { id: 3, name: "c" },
      { id: 4, name: "c" },
      { id: 4, name: "d" },
      { id: 2, name: "b" },
      { id: 4, name: "d" },
    ];
    const result = removeDuplicates(arrayWithDuplicates, {
      isObject: true,
      anchorKeys: "id",
      counts: true,
    });
    expect(result).toEqual([
      { id: 4, name: "d", _quantity: 6 },
      { id: 1, name: "a", _quantity: 2 },
      { id: 2, name: "b", _quantity: 2 },
      { id: 3, name: "c", _quantity: 1 },
    ]);
  });

  it("throws an error when removing duplicates from an array of primitives with isObject set to true", () => {
    const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
    expect(() =>
      removeDuplicates(arrayWithDuplicates, { isObject: true }),
    ).toThrow(
      "The array is not an array of objects. Please set the isObject option to false.",
    );
  });

  it("throws an error when removing duplicates from an array of objects with isObject set to false", () => {
    const arrayWithDuplicates = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "a" },
      { id: 3, name: "c" },
      { id: 2, name: "b" },
    ];
    expect(() =>
      removeDuplicates(arrayWithDuplicates, { isObject: false }),
    ).toThrow(
      "The array is not an array of primitives. Please set the isObject option to true.",
    );
  });

  it("throws an error when removing duplicates from an array of objects without providing anchor keys", () => {
    const arrayWithDuplicates = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "a" },
      { id: 3, name: "c" },
      { id: 2, name: "b" },
    ];
    expect(() =>
      removeDuplicates(arrayWithDuplicates, { isObject: true }),
    ).toThrow("You must provide an anchor key for the object to be compared.");
  });

  it("handles an empty array correctly", () => {
    const arrayWithDuplicates: any[] = [];
    const result = removeDuplicates(arrayWithDuplicates);
    expect(result).toEqual([]);
  });

  it("handles an array with a single element correctly", () => {
    const arrayWithDuplicates = [1];
    const result = removeDuplicates(arrayWithDuplicates);
    expect(result).toEqual([1]);
  });

  it("handles an array with all unique elements correctly", () => {
    const arrayWithDuplicates = [1, 2, 3, 4, 5];
    const result = removeDuplicates(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles an array with all duplicate elements correctly", () => {
    const arrayWithDuplicates = [1, 1, 1, 1, 1];
    const result = removeDuplicates(arrayWithDuplicates);
    expect(result).toEqual([1]);
  });

  it("handles an array of objects with multiple anchor keys correctly", () => {
    const arrayWithDuplicates = [
      { id: 1, name: "a", value: 10 },
      { id: 2, name: "b", value: 20 },
      { id: 1, name: "a", value: 10 },
      { id: 3, name: "c", value: 30 },
      { id: 2, name: "b", value: 20 },
    ];
    const result = removeDuplicates(arrayWithDuplicates, {
      isObject: true,
      anchorKeys: ["id", "name"],
    });
    expect(result).toEqual([
      { id: 1, name: "a", value: 10 },
      { id: 2, name: "b", value: 20 },
      { id: 3, name: "c", value: 30 },
    ]);
  });
});
