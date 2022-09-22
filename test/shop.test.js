const Shop = require("../src/shop");
const Item = require("../src/item");

let mockCheckItem, mockUpdateItem;

describe("Shop class", function () {
  beforeEach(() => {
    mockCheckItem = {
      getItemToUpdate: jest.fn(),
    };
    mockUpdateItem = {
      normalItem: jest.fn(),
    };
  });

  it("returns an empty array with no items", () => {
    const gildedRose = new Shop();
    expect(gildedRose.updateQuality()).toEqual([]);
  });

  it("returns an item", () => {
    const gildedRose = new Shop([], mockCheckItem, mockUpdateItem);
    mockCheckItem.getItemToUpdate.mockReturnValueOnce("normalItem");
    mockUpdateItem.normalItem.mockReturnValueOnce(new Item("foo", 0, 0));
    const item = gildedRose.updateSingleItem(new Item("foo", 1, 1));
    expect(mockCheckItem.getItemToUpdate).toHaveBeenCalledWith(
      new Item("foo", 1, 1)
    );
    expect(mockUpdateItem.normalItem).toHaveBeenCalledWith(
      new Item("foo", 1, 1)
    );
    expect(item.name).toBe("foo");
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(0);
  });

  it("item quality minimum is 0", () => {
    const gildedRose = new Shop([], mockCheckItem, mockUpdateItem);
    mockCheckItem.getItemToUpdate.mockReturnValueOnce("normalItem");
    mockUpdateItem.normalItem.mockReturnValueOnce(new Item("foo", -1, -1));
    const item = gildedRose.updateSingleItem(new Item("foo", 0, 0));
    expect(mockCheckItem.getItemToUpdate).toHaveBeenCalledWith(
      new Item("foo", 0, 0)
    );
    expect(mockUpdateItem.normalItem).toHaveBeenCalledWith(
      new Item("foo", 0, 0)
    );
    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("item quality maximum is 50", () => {
    const gildedRose = new Shop([], mockCheckItem, mockUpdateItem);
    mockCheckItem.getItemToUpdate.mockReturnValueOnce("normalItem");
    mockUpdateItem.normalItem.mockReturnValueOnce(new Item("foo", 0, 51));
    const item = gildedRose.updateSingleItem(new Item("foo", 1, 52));
    expect(mockCheckItem.getItemToUpdate).toHaveBeenCalledWith(
      new Item("foo", 1, 52)
    );
    expect(mockUpdateItem.normalItem).toHaveBeenCalledWith(
      new Item("foo", 1, 52)
    );
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(50);
  });

  it("restricts the quality to a range between 0-50", () => {
    const gildedRose = new Shop();
    expect(gildedRose.restrictQualityToRange(new Item("foo", 1, 30))).toEqual(
      new Item("foo", 1, 30)
    );
    expect(gildedRose.restrictQualityToRange(new Item("foo", 1, -1))).toEqual(
      new Item("foo", 1, 0)
    );
    expect(gildedRose.restrictQualityToRange(new Item("foo", 1, 52))).toEqual(
      new Item("foo", 1, 50)
    );
  });

  it("returns an updated item from an array", () => {
    const gildedRose = new Shop(
      [new Item("foo", 1, 1)],
      mockCheckItem,
      mockUpdateItem
    );
    mockCheckItem.getItemToUpdate.mockReturnValueOnce("normalItem");
    mockUpdateItem.normalItem.mockReturnValueOnce(new Item("foo", 0, 0));
    const item = gildedRose.updateQuality()[0];
    expect(mockCheckItem.getItemToUpdate).toHaveBeenCalledWith(
      new Item("foo", 1, 1)
    );
    expect(mockUpdateItem.normalItem).toHaveBeenCalledWith(
      new Item("foo", 1, 1)
    );
    expect(item.name).toBe("foo");
    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(0);
  });

  it("works with an array of multiple items", () => {
    const shopItems = [new Item("foo", 0, 0), new Item("foo", 10, 10)];
    const gildedRose = new Shop(shopItems, mockCheckItem, mockUpdateItem);
    mockCheckItem.getItemToUpdate.mockReturnValue("normalItem");
    mockUpdateItem.normalItem
      .mockReturnValueOnce(new Item("foo", -1, 0))
      .mockReturnValueOnce(new Item("foo", 9, 9));
    const resultItems = gildedRose.updateQuality();
    expect(mockCheckItem.getItemToUpdate).toHaveBeenCalledTimes(2);
    expect(mockUpdateItem.normalItem).toHaveBeenCalledTimes(2);
    expect(resultItems[0].name).toBe("foo");
    expect(resultItems[0].sellIn).toBe(-1);
    expect(resultItems[0].quality).toBe(0);
    expect(resultItems[1].name).toBe("foo");
    expect(resultItems[1].sellIn).toBe(9);
    expect(resultItems[1].quality).toBe(9);
  });
});
