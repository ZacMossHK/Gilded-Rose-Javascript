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
    if (!(brieCheck || backstageCheck))
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
      item.quality += 1;
      return true;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
