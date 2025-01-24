import { describe, it, expect } from "vitest";

import { arrayToObject } from "../";

describe("arrayToObject", () => {
  it("should be defined", () => {
    expect(arrayToObject).toBeDefined();
  });

  it("convert an array to an object.", () => {
    expect(
      arrayToObject(
        [
          { id: 1, name: "a" },
          { id: 2, name: "b" },
        ],
        "id",
      ),
    ).toEqual({
      1: { id: 1, name: "a" },
      2: { id: 2, name: "b" },
    });
  });
});
