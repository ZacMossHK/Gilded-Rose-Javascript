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
    this.items[0].quality -= this.items[0].sellIn > 0 ? 1 : 2;
    this.items[0].sellIn--;
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
