import { describe, it, expect } from "vitest";

import { deepClone } from "../";

describe("deepClone", () => {
  it("should be defined", () => {
    expect(deepClone).toBeDefined();
  });

  it("deep clone", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);

    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });
});
