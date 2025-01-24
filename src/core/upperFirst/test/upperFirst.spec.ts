import { describe, it, expect } from "vitest";

import { upperFirst } from "../";

describe("upperFirst", () => {
  it("should be defined", () => {
    expect(upperFirst).toBeDefined();
  });

  it("capitalize the first letter of the string.", () => {
    expect(upperFirst("foo")).toBe("Foo");
  });
});
