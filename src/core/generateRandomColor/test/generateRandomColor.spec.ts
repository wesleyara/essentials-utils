import { describe, it, expect } from "vitest";

import { generateRandomColor } from "../";

describe("generateRandomColor", () => {
  it("should be defined", () => {
    expect(generateRandomColor).toBeDefined();
  });

  it("generate a random color", () => {
    expect(generateRandomColor()).toBeTypeOf("string");
  });
});
