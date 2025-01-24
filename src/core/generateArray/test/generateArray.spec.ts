import { describe, it, expect } from "vitest";

import { generateArray } from "../";

describe("generateArray", () => {
  it("should be defined", () => {
    expect(generateArray).toBeDefined();
  });

  it("generate an array of numbers.", () => {
    expect(generateArray(5)).toEqual([1, 2, 3, 4, 5]);
  });
});
