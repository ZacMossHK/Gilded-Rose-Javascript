# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
jest
```

I have refactored this to be easily changable by seperating out the seperate concerns of the program.

This program manages a shop inventory and is designed to be run once a day to update the quality property of each item in the inventory based on time in days until they expire.

There are five classes:

- Item which holds the information for individual items in the inventory.
- ValidateItem which validates that the item is the correct class and the item's properties are all correct data types.
- CheckItem which checks for item type based on the name of the item.
- UpdateItem which updates the quality of the item based on the item type and days until expiration.
- Shop which updates the shop's inventory.

Items are deemed to have expired if Item.sellIn drops below 0 when updateQuality() runs.

To add a special item add a method that checks for the item by name and returns a shortened camelcase name, and the change to the item's quality property to a method in UpdateItem that has the same name as the shortened camelcase name.

eg. for an Item called "Blue Steel Guantlets of Hawat" that reduces quality by 2 every day unless expired, when it reduces by 5.

```javascript
const item = new Item("Blue Steel Guantlets of Hawat", 5, 5)

class CheckItem {
  isSpecialItem(item) {
    return (
      isBlueSteel(item) ||
      ... ||
      ... ||
      "normalItem"
    )
  }
  isBlueSteel(item) {
    if (item.name === "Blue Steel Guantlets of Hawat") return "blueSteel"
  }
}

class UpdateItem {
  blueSteel(item) {
    item.quality -= item.sellIn >= 0 ? 2 : 5
    return item
  }
}
```
