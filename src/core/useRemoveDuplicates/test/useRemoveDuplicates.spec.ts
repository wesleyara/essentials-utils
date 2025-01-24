import { describe, it, expect } from "vitest";

import { useRemoveDuplicates } from "../";

describe("useRemoveDuplicates", () => {
  it("should be defined", () => {
    expect(useRemoveDuplicates).toBeDefined();
  });

  it("remove duplicates from an array of primitives", () => {
    const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
    const result = useRemoveDuplicates(arrayWithDuplicates);
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
    const result = useRemoveDuplicates(arrayWithDuplicates, {
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
    const result = useRemoveDuplicates(arrayWithDuplicates, {
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
    const result = useRemoveDuplicates(arrayWithDuplicates, {
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
    const result = useRemoveDuplicates(arrayWithDuplicates, {
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
      useRemoveDuplicates(arrayWithDuplicates, { isObject: true }),
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
      useRemoveDuplicates(arrayWithDuplicates, { isObject: false }),
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
      useRemoveDuplicates(arrayWithDuplicates, { isObject: true }),
    ).toThrow("You must provide an anchor key for the object to be compared.");
  });

  it("handles an array with a single element correctly", () => {
    const arrayWithDuplicates = [1];
    const result = useRemoveDuplicates(arrayWithDuplicates);
    expect(result).toEqual([1]);
  });

  it("handles an array with all unique elements correctly", () => {
    const arrayWithDuplicates = [1, 2, 3, 4, 5];
    const result = useRemoveDuplicates(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles an array with all duplicate elements correctly", () => {
    const arrayWithDuplicates = [1, 1, 1, 1, 1];
    const result = useRemoveDuplicates(arrayWithDuplicates);
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
    const result = useRemoveDuplicates(arrayWithDuplicates, {
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
