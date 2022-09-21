const { Shop, Item } = require("../src/gildedRose");

describe("Gilded Rose", function () {
  it("should decrement the sellIn and quality of a normal item by one if sellIn is greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const item = gildedRose.updateQuality()[0];
    expect(item.sellIn).toBe(0);
    expect(item.sellIn).toBe(0);
  });
});
