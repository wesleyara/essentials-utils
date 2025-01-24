import { describe, it, expect } from "vitest";

import { isEmptyObject } from "../";

describe("isEmptyObject", () => {
  it("should be defined", () => {
    expect(isEmptyObject).toBeDefined();
  });

  it("check if an object is empty.", () => {
    expect(isEmptyObject({})).toBe(true);
  });
});
