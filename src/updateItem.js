class UpdateItem {
  normalItem(item) {
    item.quality -= item.sellIn > 0 ? 1 : 2;
    item.sellIn--;
    return item;
  }

  agedBrie(item) {
    item.quality += item.sellIn > 0 ? 1 : 2;
    item.sellIn--;
    return item;
  }
}

module.exports = UpdateItem;
