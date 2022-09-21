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
    this.items[0].quality--;
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
