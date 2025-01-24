import { describe, it, expect } from "vitest";

import { windowNavigateHandler } from "../";

describe("windowNavigateHandler", () => {
  it("should be defined", () => {
    expect(windowNavigateHandler).toBeDefined();
  });
});
