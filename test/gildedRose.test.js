const { Shop, Item } = require("../src/gildedRose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });

  it("should decrement the sellIn and quality of a normal item", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
  });
});
