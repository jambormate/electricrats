import { describe, expect, test } from "vitest";
import { ElectricRat } from "./ElectricRat";

describe("ElectricRat konstruktor", () => {
  test("Működik a konstruktor rendesen", () => {
    const rat = new ElectricRat("AAAA", 67, 12);
    expect(rat.name).toBe("AAAA");
    expect(rat.hp).toBe(67);
    expect(rat.atk).toBe(12);
  });
  test("üres név esetén hibát dob", () => {
    expect(() => {
      new ElectricRat("", 67, 12);
    }).toThrow();
  });
  test("space-ek esetén hibát dob", () => {
    expect(() => {
      new ElectricRat("   ", 67, 12);
    }).toThrow();
  });
  test("0 HP esetén hibát dob", () => {
    expect(() => {
      new ElectricRat("AAAA", 0, 12);
    }).toThrow();
  });
  test("negatív HP esetén hibát dob", () => {
    expect(() => {
      new ElectricRat("AAAA", -10, 12);
    }).toThrow();
  });
  test("0 ATK esetén hibát dob", () => {
    expect(() => {
      new ElectricRat("AAAA", 67, 0);
    }).toThrow();
  });
  test("negatív ATK esetén hibát dob", () => {
    expect(() => {
      new ElectricRat("AAAA", 67, -5);
    }).toThrow();
  });
});
describe("ElectricRat toCSV", () => {
  test("helyesen alakítja CSV sorrá az adatokat", () => {
    const rat = new ElectricRat("AAAA", 67, 12);
    expect(rat.toCSV()).toBe("AAAA;12;67");
  });
  test("másik patkány adatait is helyesen alakítja CSV-vé", () => {
    const rat = new ElectricRat("Villám", 86, 19);
    expect(rat.toCSV()).toBe("Villám;19;86");
  });
});