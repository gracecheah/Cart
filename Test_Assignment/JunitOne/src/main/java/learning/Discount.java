package learning;

/**
 * Discount
 */
public class Discount {
  public int absoluteValue;
  public int percentageValue;
  public String validFromDate;
  public String validToDate;
  public String[] applicableProducts;

  Discount(int discountvalue) {
    this.absoluteValue = discountvalue;
    this.percentageValue = discountvalue;
  }

  Discount(String fromDate, String toDate) {
    this.validFromDate = fromDate;
    this.validToDate = toDate;
  }

  Discount(String[] applicableProducts) {
    this.applicableProducts = applicableProducts;
  }

}