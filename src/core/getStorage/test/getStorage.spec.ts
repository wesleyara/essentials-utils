import { describe, it, expect } from "vitest";

import { getStorage } from "../";

describe("getStorage", () => {
  it("should be defined", () => {
    expect(getStorage).toBeDefined();
  });
});
