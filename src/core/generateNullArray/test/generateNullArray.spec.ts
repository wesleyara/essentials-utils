import { describe, it, expect } from "vitest";

import { generateNullArray } from "../";

describe("generateNullArray", () => {
  it("should be defined", () => {
    expect(generateNullArray).toBeDefined();
  });

  it("generate a null array", () => {
    expect(generateNullArray(3)).toEqual([null, null, null]);
  });
});
