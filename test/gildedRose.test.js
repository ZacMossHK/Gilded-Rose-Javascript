const { Shop, Item } = require("../src/gildedRose");

describe("Gilded Rose", function () {
  it("returns an empty array with no items", () => {
    const gildedRose = new Shop();
    expect(gildedRose.updateQuality()).toEqual([]);
  });

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
    expect(gildedRose.isAgedBrie(new Item("foo", 1, 1))).toBe(undefined);
    expect(gildedRose.isAgedBrie(new Item("Aged Brie", 1, 1))).toBe(true);
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
    expect(gildedRose.isBackstagePass(new Item("foo", 1, 1))).toBe(undefined);
    expect(
      gildedRose.isBackstagePass(
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
    expect(gildedRose.isSulfuras(new Item("foo", 1, 1))).toBe(undefined);
    expect(
      gildedRose.isSulfuras(new Item("Sulfuras, Hand of Ragnaros", 1, 1))
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
    expect(gildedRose.isConjured(new Item("foo", 1, 1))).toBe(undefined);
    expect(gildedRose.isConjured(new Item("Conjured Mana Cake", 1, 1))).toBe(
      true
    );
  });

  it("conjured: sellIn -1, quality -2", () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 10, 10)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(8);
  });

  it("conjured: sellIn -1, quality -4 if sellIn <= 0", () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 10)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(6);
  });

  it("checks whether the item is a special item", () => {
    const gildedRose = new Shop();
    expect(gildedRose.isSpecialItem(new Item("Aged Brie", 0, 10))).toBe(true);
    expect(
      gildedRose.isSpecialItem(new Item("Sulfuras, Hand of Ragnaros", 0, 10))
    ).toBe(true);
    expect(
      gildedRose.isSpecialItem(
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)
      )
    ).toBe(true);
    expect(
      gildedRose.isSpecialItem(new Item("Conjured Mana Cake", 0, 10))
    ).toBe(true);
    expect(gildedRose.isSpecialItem(new Item("foo", 0, 10)));
  });

  it("item quality minimum is 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("item quality maximum is 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(50);
  });

  it("works with an array of multiple items", () => {
    const shopItems = [
      new Item("Aged Brie", 10, 10),
      new Item("Conjured Mana Cake", 10, 10),
      new Item("foo", 10, 10),
    ];
    const gildedRose = new Shop(shopItems);
    const resultItems = gildedRose.updateQuality();
    expect(resultItems[0].name).toBe("Aged Brie");
    expect(resultItems[0].sellIn).toBe(9);
    expect(resultItems[0].sellIn).toBe(11);
    expect(resultItems[1].name).toBe("Conjured Mana Cake");
    expect(resultItems[1].sellIn).toBe(9);
    expect(resultItems[1].sellIn).toBe(8);
    expect(resultItems[1].name).toBe("foo");
    expect(resultItems[1].sellIn).toBe(9);
    expect(resultItems[1].sellIn).toBe(9);
  });
});
