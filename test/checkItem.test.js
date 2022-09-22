const CheckItem = require("../src/checkItem");
const Item = require("../src/item");

let checkItem;
let fooItem;

describe("CheckItem class", () => {
  beforeEach(() => {
    checkItem = new CheckItem();
    fooItem = new Item("foo", 1, 1);
  });

  it("returns normalItem if normal item", () => {
    expect(checkItem.getItemToUpdate(fooItem)).toBe("NormalItem");
  });

  it("returns AgedBrie if Aged Brie", () => {
    expect(checkItem.isAgedBrie(fooItem)).toBe(undefined);
    expect(checkItem.isAgedBrie(new Item("Aged Brie", 1, 1))).toBe("AgedBrie");
  });

  it("returns BackStagePasses if BackStage Passes", () => {
    expect(checkItem.isBackstagePasses(fooItem)).toBe(undefined);
    expect(
      checkItem.isBackstagePasses(
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1)
      )
    ).toBe("BackstagePasses");
  });

  it("returns Sulfuras if Sulfuras", () => {
    expect(checkItem.isSulfuras(fooItem)).toBe(undefined);
    expect(
      checkItem.isSulfuras(new Item("Sulfuras, Hand of Ragnaros", 1, 1))
    ).toBe("Sulfuras");
  });

  it("returns Conjured if Conjured item", () => {
    expect(checkItem.isConjured(fooItem)).toBe(undefined);
    expect(checkItem.isConjured(new Item("Conjured Mana Cake", 1, 1))).toBe(
      "Conjured"
    );
  });

  it("returns the special item from getItemToUpdate", () => {
    expect(checkItem.getItemToUpdate(new Item("Aged Brie", 1, 1))).toBe(
      "AgedBrie"
    );
    expect(
      checkItem.getItemToUpdate(
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1)
      )
    ).toBe("BackstagePasses");
    expect(
      checkItem.getItemToUpdate(new Item("Sulfuras, Hand of Ragnaros", 1, 1))
    ).toBe("Sulfuras");
    expect(
      checkItem.getItemToUpdate(new Item("Conjured Mana Cake", 1, 1))
    ).toBe("Conjured");
  });
});
