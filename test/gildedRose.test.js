const { Shop, Item } = require("../src/gildedRose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.name).toBe("foo");
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(0);
  });

  it("should decrement the sellIn and quality of a normal item by one if sellIn is greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items.sellIn).toBe(0);
    expect(items.sellIn).toBe(0);
  });
});
