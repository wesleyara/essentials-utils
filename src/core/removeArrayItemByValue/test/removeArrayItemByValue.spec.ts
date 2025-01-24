import { describe, it, expect } from "vitest";

import { removeArrayItemByValue } from "../";

describe("removeArrayItemByValue", () => {
  it("should be defined", () => {
    expect(removeArrayItemByValue).toBeDefined();
  });

  it("remove an item from an array.", () => {
    expect(removeArrayItemByValue([1, 2, 3], 2)).toEqual([1, 3]);
  });
});
