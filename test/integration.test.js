const Item = require("../src/item");
const Shop = require("../src/shop");
const SpecialItemCheck = require("../src/specialItemCheck");

describe("Integration", () => {
  it("brie: sellIn -1 and quality +1", () => {
    const gildedRose = new Shop(
      [new Item("Aged Brie", 1, 1)],
      new SpecialItemCheck()
    );
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(2);
  });

  it("brie: sellIn -1 and quality +2", () => {
    const gildedRose = new Shop(
      [new Item("Aged Brie", 0, 0)],
      new SpecialItemCheck()
    );
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(2);
  });

  it("backstage passes: sellIn -1 and quality + 1", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(14);
    expect(item.quality).toBe(11);
  });

  it("backstage passes: sellIn -1 and quality + 2 if 5 < sellIn <= 10", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(12);
  });

  it("backstage passes: sellIn -1 and quality + 3 if 0 < sellIn <= 5", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(13);
  });

  it("backstage passes: sellIn -1 and quality = 0 if sellIn === 0", () => {
    const gildedRose = new Shop(
      [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("sulfuras: sellIn and quality do not change", () => {
    const gildedRose = new Shop(
      [new Item("Sulfuras, Hand of Ragnaros", 0, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(10);
  });

  it("conjured: sellIn -1, quality -2", () => {
    const gildedRose = new Shop(
      [new Item("Conjured Mana Cake", 10, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(8);
  });

  it("conjured: sellIn -1, quality -4 if sellIn <= 0", () => {
    const gildedRose = new Shop(
      [new Item("Conjured Mana Cake", 0, 10)],
      new SpecialItemCheck()
    );

    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(6);
  });

  it("works with an array of multiple items", () => {
    const shopItems = [
      new Item("Aged Brie", 10, 10),
      new Item("Conjured Mana Cake", 10, 10),
      new Item("foo", 10, 10),
    ];
    const gildedRose = new Shop(shopItems, new SpecialItemCheck());

    const resultItems = gildedRose.updateQuality();
    expect(resultItems[0].name).toBe("Aged Brie");
    expect(resultItems[0].sellIn).toBe(9);
    expect(resultItems[0].quality).toBe(11);
    expect(resultItems[1].name).toBe("Conjured Mana Cake");
    expect(resultItems[1].sellIn).toBe(9);
    expect(resultItems[1].quality).toBe(8);
    expect(resultItems[2].name).toBe("foo");
    expect(resultItems[2].sellIn).toBe(9);
    expect(resultItems[2].quality).toBe(9);
  });
});
