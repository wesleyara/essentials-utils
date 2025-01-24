import { describe, it, expect } from "vitest";

import { shuffleArray } from "../";

describe("shuffleArray", () => {
  it("should be defined", () => {
    expect(shuffleArray).toBeDefined();
  });

  it("randomly sorting arrays.", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = shuffleArray(arr1);
    expect(arr1.some(item => arr2.includes(item))).toBe(true);
  });
});
