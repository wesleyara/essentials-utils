import { removeArrayItemByIndex } from "..";

import { describe, it, expect } from "vitest";

describe("removeArrayItemByIndex", () => {
  it("should be defined", () => {
    expect(removeArrayItemByIndex).toBeDefined();
  });

  it("remove an item from an array by index.", () => {
    expect(removeArrayItemByIndex([1, 2, 3], 1)).toEqual([1, 3]);
  });
});
