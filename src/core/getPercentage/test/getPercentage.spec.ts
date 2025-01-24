import { describe, it, expect } from "vitest";

import { getPercentage } from "../";

describe("getPercentage", () => {
  it("should be defined", () => {
    expect(getPercentage).toBeDefined();
  });

  it("get the percentage of a number.", () => {
    expect(getPercentage(10, 100)).toBe(10);
  });
});
