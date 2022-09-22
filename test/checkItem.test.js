const CheckItem = require("../src/checkItem");
const Item = require("../src/item");

let checkItem;

describe("CheckItem class", () => {
  beforeEach(() => {
    checkItem = new CheckItem();
  });

  it("returns normal item", () => {
    expect(checkItem.getItemToUpdate(new Item("foo", 1, 1))).toBe("normalItem");
  });
});
