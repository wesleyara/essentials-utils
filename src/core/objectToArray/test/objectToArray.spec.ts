import { describe, it, expect } from "vitest";

import { objectToArray } from "../";

describe("objectToArray", () => {
  it("should be defined", () => {
    expect(objectToArray).toBeDefined();
  });

  it("convert an object to an array.", () => {
    expect(
      objectToArray({
        1: { id: 1, name: "a" },
        2: { id: 2, name: "b" },
      }),
    ).toEqual([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ]);
  });
});
