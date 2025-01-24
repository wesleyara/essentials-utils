import { describe, it, expect } from "vitest";

import { delay } from "../";

describe("delay", () => {
  it("should be defined", () => {
    expect(delay).toBeDefined();
  });

  it("delay the execution of a function.", async () => {
    const start = Date.now();
    await delay(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
