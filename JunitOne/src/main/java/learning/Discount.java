package learning;

/**
 * Discount
 */
public class Discount {
  public int absoluteValue;
  public int percentageValue;
  public String validToDate;
  public String[] applicableProducts;

  Discount(int discountvalue) {
    this.absoluteValue = discountvalue;
    this.percentageValue = discountvalue;
  }

  Discount(String date) {
    this.validToDate = date;
  }

  Discount(String[] applicableProducts) {
    this.applicableProducts = applicableProducts;
  }

}