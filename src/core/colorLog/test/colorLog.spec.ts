import { describe, it, expect, vi } from "vitest";

import { colorLog } from "../";

describe("colorLog", () => {
  it("should be defined", () => {
    expect(colorLog).toBeDefined();
  });

  it("color log", () => {
    const mockLog = vi.fn();
    global.console.log = mockLog;

    mockLog(colorLog("foo", { color: "red" }));

    expect(mockLog).toHaveBeenCalledWith("\x1b[31mfoo\x1b[0m");
  });
});
