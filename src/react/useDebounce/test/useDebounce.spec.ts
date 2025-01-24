import { describe, it, expect } from "vitest";

import { useDebounce } from "../";

describe("useDebounce", () => {
  it("should be defined", () => {
    expect(useDebounce).toBeDefined();
  });
});
