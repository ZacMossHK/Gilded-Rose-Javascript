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
    if (this.items[0].name === "Aged Brie") {
      this.items[0].quality += this.items[0].sellIn > 0 ? 1 : 2;
    } else if (
      this.items[0].name === "Backstage passes to a TAFKAL80ETC concert"
    ) {
      this.items[0].quality += 1;
    } else {
      this.items[0].quality -= this.items[0].sellIn > 0 ? 1 : 2;
    }
    this.items[0].sellIn--;
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
