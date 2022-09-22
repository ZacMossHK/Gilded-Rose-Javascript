class Shop {
  constructor(items = [], checkItem, updateItem) {
    this.items = items;
    this.checkItem = checkItem;
    this.updateItem = updateItem;
  }

  updateQuality() {
    return this.items.map(this.updateSingleItem, this);
  }

  updateSingleItem(item) {
    const itemType = this.checkItem.getItemToUpdate(item);
    if (itemType === "sulfuras") return item;
    item.sellIn--;
    return this.restrictQualityToRange(this.updateItem[itemType](item));
  }

  restrictQualityToRange(item) {
    if (item.quality < 0) item.quality = 0;
    if (item.quality > 50) item.quality = 50;
    return item;
  }
}

module.exports = Shop;
