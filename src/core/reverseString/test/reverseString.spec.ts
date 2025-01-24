import { describe, it, expect } from "vitest";

import { reverseString } from "../";

describe("reverseString", () => {
  it("should be defined", () => {
    expect(reverseString).toBeDefined();
  });

  it("reverse a string.", () => {
    expect(reverseString("foo")).toBe("oof");
  });
});
