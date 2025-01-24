import { describe, it, expect } from "vitest";

import { arrayLastItem } from "../";

describe("arrayLastItem", () => {
  it("should be defined", () => {
    expect(arrayLastItem).toBeDefined();
  });

  it("get the last item of an array.", () => {
    expect(arrayLastItem([1, 2, 3])).toBe(3);
  });
});
