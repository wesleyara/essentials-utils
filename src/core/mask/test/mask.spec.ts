import { describe, it, expect } from "vitest";

import { cepMask, cnpjMask, cpfMask, phoneMask } from "../";

describe("mask", () => {
  it("should be defined", () => {
    expect(cepMask).toBeDefined();
    expect(cnpjMask).toBeDefined();
    expect(cpfMask).toBeDefined();
    expect(phoneMask).toBeDefined();
  });

  it("phone mask", () => {
    expect(phoneMask("11999999999")).toBe("(11) 99999-9999");
  });

  it("cpf mask", () => {
    expect(cpfMask("99999999999")).toBe("999.999.999-99");
  });

  it("cnpj mask", () => {
    expect(cnpjMask("99999999999999")).toBe("99.999.999/9999-99");
  });

  it("cep mask", () => {
    expect(cepMask("99999999")).toBe("99999-999");
  });
});
