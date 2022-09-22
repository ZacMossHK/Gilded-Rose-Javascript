const Item = require("../src/item");
const UpdateItem = require("../src/updateItem");

let updateItem;

describe("UpdateItem class", () => {
  beforeEach(() => {
    updateItem = new UpdateItem();
  });

  it("NormalItem: updates a normal item", () => {
    expect(updateItem.normalItem(new Item("foo", 1, 1))).toEqual(
      new Item("foo", 0, 0)
    );
  });

  it("normalItem: decrememnts quality x2 if sellIn is 0", () => {
    expect(updateItem.normalItem(new Item("foo", 0, 0))).toEqual(
      new Item("foo", -1, -2)
    );
  });

  it("brie: updates brie", () => {
    expect(updateItem.agedBrie(new Item("Aged Brie,", 1, 1))).toEqual(
      new Item("Aged Brie", 0, 1)
    );
  });
});
