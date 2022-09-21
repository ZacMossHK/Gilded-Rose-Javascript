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
    if (!this.items.length) return [];
    this.items[0].sellIn--;
    if (!this.isSpecialItem(this.items[0]))
      this.items[0].quality -= this.items[0].sellIn >= 0 ? 1 : 2;
    if (this.items[0].quality < 0) this.items[0].quality = 0;
    if (this.items[0].quality > 50) this.items[0].quality = 50;
    return this.items;
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
