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
    const item = new Item("Aged Brie", 1, 1);
    expect(checkItem.isAgedBrie(fooItem)).toBe(undefined);
    expect(checkItem.isAgedBrie(item)).toBe("agedBrie");
    expect(checkItem.getItemToUpdate(item)).toBe("AgedBrie");
  });

  it("returns BackStagePasses if BackStage Passes", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1);
    expect(checkItem.isBackstagePasses(fooItem)).toBe(undefined);
    expect(checkItem.isBackstagePasses(item)).toBe("BackstagePasses");
    expect(checkItem.getItemToUpdate(item)).toBe("BackstagePasses");
  });

  it("returns Sulfuras if Sulfuras", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 1, 1);
    expect(checkItem.isSulfuras(item)).toBe(undefined);
    expect(checkItem.isSulfuras(item)).toBe("Sulfuras");
    expect(checkItem.getItemToUpdate(item)).toBe("Sulfuras");
  });
});
