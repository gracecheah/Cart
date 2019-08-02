// package com.gildedrose;

class GildedRose {
  Item[] items;

  public GildedRose(Item[] items) {
    this.items = items;
  }

  public boolean isAgedBrie(String name) {
    return name.equals("Aged Brie");
  }

  public boolean isBackstage(String name) {
    return name.equals("Backstage passes to a TAFKAL80ETC concert");
  }

  public boolean isSulfuras(String name) {
    return name.equals("Sulfuras, Hand of Ragnaros");
  }

  public boolean isConjured(String name) {
    return name.startsWith("Conjured");
  }

  public void updateQuality() {
    for (int i = 0; i < items.length; i++) {
      Item item = items[i];
      String name = item.name;

      ItemCategory category = null;

      if (isAgedBrie(name)) {
        category = new AgedBrie();
      } else if (isBackstage(name)) {
        category = new Backstage();
      } else if (isSulfuras(name)) {
        category = new Sulfaras();
      } else if (isConjured(name)) {
        category = new Conjured();
      } else {
        category = new NormalItem();
      }

      category.updateQuality(item);

    }
  }

  public static void main(String[] args) {
    Item[] items = { new Item("Sulfuras, Hand of Ragnaros", 0, 80), new Item("Aged Brie", 3, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 7, 30),
        new Item("Backstage passes to a TAFKAL80ETC concert", 2, 40), new Item("Normal Item", 4, 10),
        new Item("Conjured Cake", 4, 20) };
    GildedRose gildedRose = new GildedRose(items);

    int day = 0;
    while (day < 8) {
      System.out.println("Day " + day);
      for (Item item : gildedRose.items) {
        System.out.println(item.name + ", " + item.sellIn + ", " + item.quality);
      }

      gildedRose.updateQuality();
      System.out.println("------------------------------------");
      day += 1;
    }
  }
}

// Day 0
// Sulfuras, Hand of Ragnaros, 0, 80
// Aged Brie, 3, 20
// Backstage passes to a TAFKAL80ETC concert, 12, 20
// Backstage passes to a TAFKAL80ETC concert, 7, 30
// Backstage passes to a TAFKAL80ETC concert, 2, 40
// Normal Item, 4, 10
// Conjured Cake, 4, 20
// ------------------------------------
// Day 1
// Sulfuras, Hand of Ragnaros, 0, 80
// Aged Brie, 2, 21
// Backstage passes to a TAFKAL80ETC concert, 11, 21
// Backstage passes to a TAFKAL80ETC concert, 6, 32
// Backstage passes to a TAFKAL80ETC concert, 1, 43
// Normal Item, 3, 9
// Conjured Cake, 3, 18
// ------------------------------------
// Day 2
// Sulfuras, Hand of Ragnaros, 0, 80
// Aged Brie, 1, 22
// Backstage passes to a TAFKAL80ETC concert, 10, 22
// Backstage passes to a TAFKAL80ETC concert, 5, 34
// Backstage passes to a TAFKAL80ETC concert, 0, 46
// Normal Item, 2, 8
// Conjured Cake, 2, 16
// ------------------------------------
// Day 3
// Sulfuras, Hand of Ragnaros, 0, 80
// Aged Brie, 0, 23
// Backstage passes to a TAFKAL80ETC concert, 9, 24
// Backstage passes to a TAFKAL80ETC concert, 4, 37
// Backstage passes to a TAFKAL80ETC concert, -1, 49
// Normal Item, 1, 7
// Conjured Cake, 1, 14
// ------------------------------------
