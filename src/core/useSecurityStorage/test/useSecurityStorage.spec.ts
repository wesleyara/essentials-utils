import { describe, it, expect } from "vitest";

import { useSecurityStorage } from "../";

describe("useSecurityStorage", () => {
  it("should be defined", () => {
    expect(useSecurityStorage).toBeDefined();
  });
});
