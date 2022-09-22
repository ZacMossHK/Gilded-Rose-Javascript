class UpdateItem {
  normalItem(item) {
    item.sellIn > 0 ? item.quality-- : (item.quality -= 2);
    item.sellIn--;
    return item;
  }

  agedBrie(item) {
    item.quality++;
    item.sellIn--;
    return item;
  }
}

module.exports = UpdateItem;
