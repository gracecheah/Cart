/**
 * PurchaseSystem
 */
public class PurchaseSystem {
  Product[] products;
  User[] users;
  Discount[] discounts;

  PurchaseSystem(Product[] products, User[] users, Discount[] discounts) {
    this.products = products;
    this.users = users;
    this.discounts = discounts;
  }

  Order createOrder(User user, Product[] products) {
    return new Order(user, products);
  }

  void applyDiscount(Order order, String discountCode) {
    for (Discount discount : discounts) {
      if (discount.code.equals(discountCode)) {
        order.applyDiscount(discount);
        break;
      }
    }
  }

  public static void main(String[] args) {
    Discount[] discounts = { new Discount("absolute", 200, "ABSOLUTE19", "31-08-2019", "31-09-2019"),
        new Discount("percentage", 10, "PERCENTAGE19", "31-08-2019", "31-09-2019"), };

    Discount[] emptyArray = {};

    Product[] products = { new Product(discounts, "Alienware Laptop", 5000), new Product(emptyArray, "Mouse", 50), };
    User[] users = { new User("John Smith") };

    PurchaseSystem purchaseSystem = new PurchaseSystem(products, users, discounts);

    User selectedUser = purchaseSystem.users[0];
    Product[] selectedProducts = { purchaseSystem.products[0], purchaseSystem.products[1], };
    Order order = purchaseSystem.createOrder(selectedUser, selectedProducts);

    System.out.println("Total Price: " + order.totalPrice());
    System.out.println("-----------------------------------");
    for (Product product : order.products) {
      System.out.println("   " + product.name + " : " + product.price);
    }

    purchaseSystem.applyDiscount(order, "PERCENTAGE19");

    System.out.println("Total Price: " + order.totalPrice());
    System.out.println("-----------------------------------");
    for (Product product : order.products) {
      System.out.println("   " + product.name + " : " + product.price);
    }
    System.out.println("Discount Applied :" + order.discount.code + " - " + order.discount.amount);
  }
}