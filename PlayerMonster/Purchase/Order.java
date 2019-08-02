class Order {
  User user;
  Product[] products;
  Discount discount;

  Order(User user, Product[] products) {
    this.user = user;
    this.products = products;
  }

  int totalPrice() {
    int total = 0;
    for (Product product : products) {
      int productPrice = product.price;

      // try to apply discount if present
      if (discount != null) {
        for (Discount applicableDiscount : product.applicableDiscounts) {
          if (discount.code.equals(applicableDiscount.code)) {
            if (discount.type.equals("absolute")) {
              productPrice -= discount.amount;
            } else if (discount.type.equals("percentage")) {
              productPrice -= (productPrice * discount.amount / 100);
            }
          }
        }
      }

      total += productPrice;
    }

    return total;
  }

  void applyDiscount(Discount discount) {
    this.discount = discount;
  }
}