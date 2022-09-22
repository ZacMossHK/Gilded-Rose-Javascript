class Shop {
  constructor(items = [], checkItem, updateItem) {
    this.items = items;
    this.checkItem = checkItem;
    this.updateItem = updateItem;
  }

  updateQuality() {
    return this.items.map((item) => updateSingleItem);
  }

  updateSingleItem(item) {
    const itemToUpdate = this.checkItem.getItemToUpdate(item);
    if (itemToUpdate === "sulfuras") return item;
    return this.restrictQualityToRange(this.updateItem[itemToUpdate](item));
  }

  restrictQualityToRange(item) {
    if (item.quality < 0) item.quality = 0;
    if (item.quality > 50) item.quality = 50;
    return item;
  }
}

module.exports = Shop;
