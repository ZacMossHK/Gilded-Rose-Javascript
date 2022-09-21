const Shop = require("../src/shop");
const Item = require("../src/item");

let mockSpecialItemCheck;

describe("Shop class", function () {
  beforeEach(() => {
    mockSpecialItemCheck = {
      isSpecialItem: jest.fn(),
    };
  });

  it("returns an empty array with no items", () => {
    const gildedRose = new Shop();
    expect(gildedRose.updateQuality()).toEqual([]);
  });

  it("normal item: sellIn -1 and quality -1", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)], mockSpecialItemCheck);
    mockSpecialItemCheck.isSpecialItem.mockReturnValueOnce(false);
    const item = gildedRose.updateQuality()[0];
    expect(mockSpecialItemCheck.isSpecialItem).toHaveBeenCalled();
    expect(item.sellIn).toBe(0);
    expect(item.sellIn).toBe(0);
  });

  it("normal item: sellIn -1 and quality -2 if sellIn <= 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 2)], mockSpecialItemCheck);
    mockSpecialItemCheck.isSpecialItem.mockReturnValueOnce(false);
    const item = gildedRose.updateQuality()[0];
    expect(mockSpecialItemCheck.isSpecialItem).toHaveBeenCalled();
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("item quality minimum is 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)], mockSpecialItemCheck);
    mockSpecialItemCheck.isSpecialItem.mockReturnValueOnce(false);
    const item = gildedRose.updateQuality()[0];
    expect(mockSpecialItemCheck.isSpecialItem).toHaveBeenCalled();
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("item quality maximum is 50", () => {
    const gildedRose = new Shop([new Item("foo", 1, 52)], mockSpecialItemCheck);
    mockSpecialItemCheck.isSpecialItem.mockReturnValueOnce(false);
    const item = gildedRose.updateQuality()[0];
    expect(mockSpecialItemCheck.isSpecialItem).toHaveBeenCalled();
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(50);
  });

  it("restricts the quality to a range between 0-50", () => {
    const gildedRose = new Shop();
    expect(gildedRose.restrictQualityToRange(30)).toBe(30);
    expect(gildedRose.restrictQualityToRange(-1)).toBe(0);
    expect(gildedRose.restrictQualityToRange(52)).toBe(50);
  });

  it("works with an array of multiple items", () => {
    const shopItems = [new Item("foo", 0, 0), new Item("foo", 10, 10)];
    const gildedRose = new Shop(shopItems, mockSpecialItemCheck);
    mockSpecialItemCheck.isSpecialItem
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false);
    const resultItems = gildedRose.updateQuality();
    expect(mockSpecialItemCheck.isSpecialItem).toHaveBeenCalledTimes(2);
    expect(resultItems[0].name).toBe("foo");
    expect(resultItems[0].sellIn).toBe(-1);
    expect(resultItems[0].quality).toBe(0);
    expect(resultItems[1].name).toBe("foo");
    expect(resultItems[1].sellIn).toBe(9);
    expect(resultItems[1].quality).toBe(9);
  });
});
