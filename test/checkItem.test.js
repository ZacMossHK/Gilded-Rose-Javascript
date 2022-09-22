const CheckItem = require("../src/checkItem");
const Item = require("../src/item");

let checkItem;

describe("CheckItem class", () => {
  beforeEach(() => {
    checkItem = new CheckItem();
  });

  it("returns normalItem if normal item", () => {
    expect(checkItem.getItemToUpdate(new Item("foo", 1, 1))).toBe("normalItem");
  });

  it("returns agedBrie if Aged Brie", () => {
    const item = new Item("Aged Brie", 1, 1);
    expect(checkItem.isAgedBrie(item)).toBe("agedBrie");
    expect(checkItem.getItemToUpdate(item)).toBe("agedBrie");
  });
});
