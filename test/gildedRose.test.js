const { Shop, Item } = require("../src/gildedRose");

describe("Gilded Rose", function () {
  it("normal item: sellIn -1 and quality -1 if sellIn > 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.sellIn).toBe(0);
  });

  it("normal item: sellIn -1 and quality -2 if sellIn <= 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(-2);
  });

  it("brie: sellIn -1 and quality +1 if sellIn > 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 1)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(2);
  });

  it("brie: sellIn -1 and quality +2 if sellIn <= 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(2);
  });

  it("backstage passes: sellIn -1 and quality + 1 if sellIn > 10", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10),
    ]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(14);
    expect(item.quality).toBe(11);
  });
});
