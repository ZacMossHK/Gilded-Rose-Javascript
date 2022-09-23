const Item = require("../src/item");
const ValidateItem = require("../src/validateItem");

let validateItem;

describe("ValidateItem class", () => {
  beforeEach(() => {
    validateItem = new ValidateItem();
  });

  it("throws an error if item is not an instance of Item", () => {
    expect(() => {
      validateItem.validateClass("foo");
    }).toThrow(new Error("Items must be an instance of Item"));
  });

  it("throws an error if item name is not a string", () => {
    expect(() => {
      validateItem.validateName(new Item(1, 1, 1));
    }).toThrow(new Error("Item name must be a string"));
  });

  it("throws an error if item sellIn is not an integer", () => {
    expect(() => {
      validateItem.validateSellIn(new Item("foo", "1", 1));
    }).toThrow(new Error("Item sellIn must be an integer"));
  });

  it("throws an error if item quality is not an integer", () => {
    expect(() => {
      validateItem.validateQuality(new Item("foo", 1, "1"));
    }).toThrow(new Error("Item quality must be an integer"));
  });

  it("runs all validation checks", () => {
    expect(() => {
      validateItem.validateAllProperties("foo");
    }).toThrow(new Error("Items must be an instance of Item"));
    expect(() => {
      validateItem.validateName(new Item(1, 1, 1));
    }).toThrow(new Error("Item name must be a string"));
    expect(() => {
      validateItem.validateSellIn(new Item("foo", "1", 1));
    }).toThrow(new Error("Item sellIn must be an integer"));
    expect(() => {
      validateItem.validateQuality(new Item("foo", 1, "1"));
    }).toThrow(new Error("Item quality must be an integer"));
  });
});
