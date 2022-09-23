const Item = require("./item");

class UpdateItem {
  normalItem(item) {
    item.quality -= item.sellIn >= 0 ? 1 : 2;
    return item;
  }

  agedBrie(item) {
    item.quality += item.sellIn >= 0 ? 1 : 2;
    return item;
  }

  backstagePasses(item) {
    item.quality += 1;
    if (item.sellIn < 10) item.quality += 1;
    if (item.sellIn < 5) item.quality += 1;
    if (item.sellIn < 0) item.quality = 0;
    return item;
  }

  conjured(item) {
    item.quality -= item.sellIn >= 0 ? 2 : 4;
    return item;
  }
}

module.exports = UpdateItem;
