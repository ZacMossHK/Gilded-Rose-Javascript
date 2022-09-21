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
    this.items[0].sellIn--;
    const brieCheck = this.agedBrieCheck(this.items[0]);
    const backstageCheck = this.backstagePassesCheck(this.items[0]);
    const sulfurasCheck = this.sulfurasCheck(this.items[0]);
    const conjuredItemCheck = this.conjuredItemCheck(this.items[0]);
    if (!(brieCheck || backstageCheck || sulfurasCheck || conjuredItemCheck))
      this.items[0].quality -= this.items[0].sellIn >= 0 ? 1 : 2;
    return this.items;
  }

  agedBrieCheck(item) {
    if (item.name === "Aged Brie") {
      item.quality += item.sellIn >= 0 ? 1 : 2;
      return true;
    }
  }

  backstagePassesCheck(item) {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      item.quality++;
      if (item.sellIn < 10) item.quality++;
      if (item.sellIn < 5) item.quality++;
      if (item.sellIn < 0) item.quality = 0;
      return true;
    }
  }

  sulfurasCheck(item) {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      item.sellIn++;
      return true;
    }
  }

  conjuredItemCheck(item) {
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
