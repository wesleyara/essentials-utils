import { describe, it, expect } from "vitest";

import { arrayEquals } from "../";

describe("arrayEquals", () => {
  it("should be defined", () => {
    expect(arrayEquals).toBeDefined();
  });

  it("check if two arrays are equal.", () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3])).toBe(true);
  });
});
