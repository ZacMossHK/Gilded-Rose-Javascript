class CheckItem {
  getItemToUpdate(item) {
    return this.isAgedBrie(item) || "normalItem";
  }

  isAgedBrie(item) {
    if (item.name === "Aged Brie") return "agedBrie";
  }
}

module.exports = CheckItem;
