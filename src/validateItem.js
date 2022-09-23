class ValidateItem {
  validateAllProperties(item) {
    this.validateClass(item);
    this.validateName(item);
    this.validateSellIn(item);
    this.validateQuality(item);
  }

  validateClass(item) {
    if (item.constructor.name !== "Item")
      throw new Error("Items must be an instance of Item");
  }

  validateName(item) {
    if (typeof item.name !== "string")
      throw new Error("Item name must be a string");
  }

  validateSellIn(item) {
    if (!Number.isInteger(item.sellIn))
      throw new Error("Item sellIn must be an integer");
  }

  validateQuality(item) {
    if (!Number.isInteger(item.quality))
      throw new Error("Item quality must be an integer");
  }
}

module.exports = ValidateItem;
