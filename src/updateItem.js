class UpdateItem {
  normalItem(item) {
    console.log(item);
    item.sellIn > 0 ? item.quality-- : (item.quality -= 2);
    item.sellIn--;
    return item;
  }
}

module.exports = UpdateItem;
