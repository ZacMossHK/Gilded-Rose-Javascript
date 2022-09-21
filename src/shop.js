class Shop {
  constructor(items = [], specialItemCheck) {
    this.items = items;
    this.specialItemCheck = specialItemCheck;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.sellIn--;
      if (!this.specialItemCheck.isSpecialItem(item))
        item.quality -= item.sellIn >= 0 ? 1 : 2;
      item.quality = this.restrictQualityToRange(item.quality);
    });
    return this.items;
  }

  restrictQualityToRange(quality) {
    if (quality < 0) quality = 0;
    if (quality > 50) quality = 50;
    return quality;
  }
}

module.exports = Shop;
