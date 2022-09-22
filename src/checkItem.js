class CheckItem {
  getItemToUpdate(item) {
    return (
      this.isSulfuras(item) ||
      this.isBackstagePasses(item) ||
      this.isAgedBrie(item) ||
      "NormalItem"
    );
  }

  isAgedBrie(item) {
    if (item.name === "Aged Brie") return "AgedBrie";
  }

  isBackstagePasses(item) {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert")
      return "BackstagePasses";
  }

  isSulfuras(item) {
    if (item.name === "Sulfuras, Hand of Ragnaros") return "Sulfuras";
  }
}

module.exports = CheckItem;
