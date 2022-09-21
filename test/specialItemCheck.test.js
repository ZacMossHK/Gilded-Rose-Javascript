const SpecialItemCheck = require("../src/specialItemCheck");
const Item = require("../src/item");

let specialItemCheck;

describe("SpecialItemCheck class", () => {
  beforeEach(() => {
    specialItemCheck = new SpecialItemCheck();
  });

  it("brie: check method returns true", () => {
    expect(specialItemCheck.isAgedBrie(new Item("foo", 1, 1))).toBe(undefined);
    expect(specialItemCheck.isAgedBrie(new Item("Aged Brie", 1, 1))).toBe(true);
  });

  it("backstages passes: check method returns true", () => {
    expect(specialItemCheck.isBackstagePass(new Item("foo", 1, 1))).toBe(
      undefined
    );
    expect(
      specialItemCheck.isBackstagePass(
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1)
      )
    ).toBe(true);
  });

  it("sulfuras: check method returns true", () => {
    expect(specialItemCheck.isSulfuras(new Item("foo", 1, 1))).toBe(undefined);
    expect(
      specialItemCheck.isSulfuras(new Item("Sulfuras, Hand of Ragnaros", 1, 1))
    ).toBe(true);
  });

  it("conjured: check method returns true", () => {
    expect(specialItemCheck.isConjured(new Item("foo", 1, 1))).toBe(undefined);
    expect(
      specialItemCheck.isConjured(new Item("Conjured Mana Cake", 1, 1))
    ).toBe(true);
  });

  it("checks whether the item is a special item", () => {
    expect(specialItemCheck.isSpecialItem(new Item("Aged Brie", 0, 10))).toBe(
      true
    );
    expect(
      specialItemCheck.isSpecialItem(
        new Item("Sulfuras, Hand of Ragnaros", 0, 10)
      )
    ).toBe(true);
    expect(
      specialItemCheck.isSpecialItem(
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)
      )
    ).toBe(true);
    expect(
      specialItemCheck.isSpecialItem(new Item("Conjured Mana Cake", 0, 10))
    ).toBe(true);
    expect(specialItemCheck.isSpecialItem(new Item("foo", 0, 0))).toBe(false);
  });
});
