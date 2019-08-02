/**
 * Discount
 */
public class Discount {
  String type;
  String code;
  int amount;
  String startDate;
  String endDate;
  String productType;

  Discount(String type, int amount, String code, String startDate, String endDate, String productType) {
    this.type = type;
    this.code = code;
    this.amount = amount;
    this.startDate = startDate;
    this.endDate = endDate;
    this.productType = productType;
  }

}