import { describe, it, expect } from "vitest";

import { generateRandomNumber } from "../";

describe("generateRandomNumber", () => {
  it("should be defined", () => {
    expect(generateRandomNumber).toBeDefined();
  });

  it("generate a random number.", () => {
    expect(generateRandomNumber(1, 10)).toBeGreaterThanOrEqual(1);
    expect(generateRandomNumber(1, 10)).toBeLessThanOrEqual(10);
  });
});
