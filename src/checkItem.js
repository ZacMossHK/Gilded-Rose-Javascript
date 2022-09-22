class CheckItem {
  getItemToUpdate(item) {
    return (
      this.isConjured(item) ||
      this.isSulfuras(item) ||
      this.isBackstagePasses(item) ||
      this.isAgedBrie(item) ||
      "normalItem"
    );
  }

  isAgedBrie(item) {
    if (item.name === "Aged Brie") return "agedBrie";
  }

  isBackstagePasses(item) {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert")
      return "backstagePasses";
  }

  isSulfuras(item) {
    if (item.name === "Sulfuras, Hand of Ragnaros") return "sulfuras";
  }

  isConjured(item) {
    if (item.name === "Conjured Mana Cake") return "conjured";
  }
}

module.exports = CheckItem;
