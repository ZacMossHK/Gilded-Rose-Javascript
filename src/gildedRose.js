class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.sellIn--;
      if (!this.isSpecialItem(item)) item.quality -= item.sellIn >= 0 ? 1 : 2;
      item.quality = this.restrictQualityToRange(item.quality);
    });
    return this.items;
  }

  restrictQualityToRange(quality) {
    if (quality < 0) quality = 0;
    if (quality > 50) quality = 50;
    return quality;
  }

  isSpecialItem(item) {
    return [
      this.isAgedBrie,
      this.isBackstagePass,
      this.isSulfuras,
      this.isConjured,
    ].some((method) => method(item));
  }

  isAgedBrie(item) {
    if (item.name === "Aged Brie") {
      item.quality += item.sellIn >= 0 ? 1 : 2;
      return true;
    }
  }

  isBackstagePass(item) {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      item.quality++;
      if (item.sellIn < 10) item.quality++;
      if (item.sellIn < 5) item.quality++;
      if (item.sellIn < 0) item.quality = 0;
      return true;
    }
  }

  isSulfuras(item) {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      item.sellIn++;
      return true;
    }
  }

  isConjured(item) {
    if (item.name === "Conjured Mana Cake") {
      item.quality -= item.sellIn >= 0 ? 2 : 4;
      return true;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
