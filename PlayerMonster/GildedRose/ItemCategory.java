class ItemCategory {
  int maxQuality = 50;
  int minQuality = 0;

  void incrementQuality(Item item) {
    if (item.quality < 50) {
      item.quality += 1;
      if (item.name.startsWith("Conjured")) {
        item.quality += 1;
      }
    }
  }

  void decrementQuality(Item item) {
    if (item.quality > 0) {
      item.quality -= 1;
      if (item.name.startsWith("Conjured")) {
        item.quality -= 1;
      }
    }
  }

  void updateItemQuality(Item item) {
    decrementQuality(item);
  }

  void updateSellin(Item item) {
    item.sellIn -= 1;
  }

  void updatedExpired(Item item) {
    decrementQuality(item);
    decrementQuality(item);
  }

  void updateQuality(Item item) {
    updateItemQuality(item);
    updateSellin(item);
    updatedExpired(item);
  }
}
