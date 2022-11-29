import { describe, expect, it } from "vitest";

import {
  upperFirst,
  fetchRequest,
  delay,
  arrayEquals,
  arrayToObject,
  generateArray,
  reverseString,
  removeArrayItem,
} from "./index";

describe("all methods in the package", () => {
  it("capitalize the first letter of the string.", () => {
    expect(upperFirst("foo")).toBe("Foo");
  });

  it("fetch data from an api.", async () => {
    expect(
      await fetchRequest("https://api.github.com/users/wesleyara"),
    ).toEqual(
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
    expect(removeArrayItem([1, 2, 3], 2)).toEqual([1, 3]);
  });
});
