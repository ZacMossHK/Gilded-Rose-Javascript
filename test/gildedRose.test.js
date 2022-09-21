const { Shop, Item } = require("../src/gildedRose");

describe("Gilded Rose", function () {
  it("normal item: sellIn -1 and quality -1", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.sellIn).toBe(0);
  });

  it("normal item: sellIn -1 and quality -2 if sellIn <= 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 2)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("brie: check method returns true", () => {
    const gildedRose = new Shop();
    expect(gildedRose.agedBrieCheck(new Item("foo", 1, 1))).toBe(undefined);
    expect(gildedRose.agedBrieCheck(new Item("Aged Brie", 1, 1))).toBe(true);
  });

  it("brie: sellIn -1 and quality +1", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 1)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(2);
  });

  it("brie: sellIn -1 and quality +2", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(2);
  });

  it("backstages passes: check method returns true", () => {
    const gildedRose = new Shop();
    expect(gildedRose.backstagePassesCheck(new Item("foo", 1, 1))).toBe(
      undefined
    );
    expect(
      gildedRose.backstagePassesCheck(
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1)
      )
    ).toBe(true);
  });

  it("backstage passes: sellIn -1 and quality + 1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10),
    ]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(14);
    expect(item.quality).toBe(11);
  });

  it("backstage passes: sellIn -1 and quality + 2 if 5 < sellIn <= 10", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
    ]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(12);
  });

  it("backstage passes: sellIn -1 and quality + 3 if 0 < sellIn <= 5", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
    ]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(13);
  });

  it("backstage passes: sellIn -1 and quality = 0 if sellIn === 0", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("sulfuras: check method returns true", () => {
    const gildedRose = new Shop();
    expect(gildedRose.sulfurasCheck(new Item("foo", 1, 1))).toBe(undefined);
    expect(
      gildedRose.sulfurasCheck(new Item("Sulfuras, Hand of Ragnaros", 1, 1))
    ).toBe(true);
  });

  it("sulfuras: sellIn and quality do not change", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 10),
    ]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(10);
  });

  it("conjured: check method returns true", () => {
    const gildedRose = new Shop();
    expect(gildedRose.conjuredCheck(new Item("foo", 1, 1))).toBe(undefined);
    expect(gildedRose.conjuredCheck(new Item("Conjured Mana Cake", 1, 1))).toBe(
      true
    );
  });
});
