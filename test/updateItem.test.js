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

  it("normalItem: decrememnts quality x2 if sellIn <= 0", () => {
    expect(updateItem.normalItem(new Item("foo", 0, 0))).toEqual(
      new Item("foo", -1, -2)
    );
  });

  it("brie: updates brie", () => {
    expect(updateItem.agedBrie(new Item("Aged Brie", 1, 1))).toEqual(
      new Item("Aged Brie", 0, 2)
    );
  });

  it("brie: increments brie quality x2 if sellIn <= 0", () => {
    expect(updateItem.agedBrie(new Item("Aged Brie", 0, 0))).toEqual(
      new Item("Aged Brie", -1, 2)
    );
  });

  it("backstagePasses: increments quality +1", () => {
    expect(
      updateItem.backstagePasses(
        new Item("Backstage passes to a TAFKAL80ETC concert", 20, 1)
      )
    ).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 19, 2));
  });

  it("backstagePasses: increments quality +2 if 5 > sellIn <= 10", () => {
    expect(
      updateItem.backstagePasses(
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)
      )
    ).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 9, 2));
  });

  it("backstagePasses: increments quality +3 if 0 > sellIn <= 5", () => {
    expect(
      updateItem.backstagePasses(
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)
      )
    ).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 3));
  });

  it("backstagePasses: quality = 0 if sellIn =< 0", () => {
    expect(
      updateItem.backstagePasses(
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50)
      )
    ).toEqual(new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0));
  });

  it("conjured: update conjured", () => {
    expect(updateItem.conjured(new Item("Conjured Mana Cake", 1, 0))).toEqual(
      new Item("Conjured Mana Cake", 0, -2)
    );
  });

  it("conjured: quality - 4 if sellIn <=0", () => {
    expect(updateItem.conjured(new Item("Conjured Mana Cake", 0, 0))).toEqual(
      new Item("Conjured Mana Cake", -1, -4)
    );
  });
});
