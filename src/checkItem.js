class CheckItem {
  getItemToUpdate(item) {
    return (
      this.isBackstagePasses(item) || this.isAgedBrie(item) || "normalItem"
    );
  }

  isAgedBrie(item) {
    if (item.name === "Aged Brie") return "agedBrie";
  }

  isBackstagePasses(item) {
    if (item.name === "Backstage passes to a TAFKAL80ETC concert")
      return "backstagePasses";
  }
}

module.exports = CheckItem;
