import { describe, it, expect } from "vitest";

import { useStorage } from "../";

describe("useStorage", () => {
  it("should be defined", () => {
    expect(useStorage).toBeDefined();
  });
});
