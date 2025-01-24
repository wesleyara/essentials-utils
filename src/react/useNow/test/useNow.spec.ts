import { describe, it, expect } from "vitest";

import { useNow } from "../";

describe("useNow", () => {
  it("should be defined", () => {
    expect(useNow).toBeDefined();
  });
});
