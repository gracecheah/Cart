class Product {
  String name;
  int price;
  Discount[] applicableDiscounts;

  Product(Discount[] discounts, String name, int price) {
    this.name = name;
    this.price = price;
    this.applicableDiscounts = discounts;
  }
}