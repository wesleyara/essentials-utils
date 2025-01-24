import { describe, it, expect } from "vitest";

import { generateRandomString } from "../";

describe("generateRandomString", () => {
  it("should be defined", () => {
    expect(generateRandomString).toBeDefined();
  });

  it("generate a random string", () => {
    expect(generateRandomString(10)).toBeTypeOf("string");
  });
});
