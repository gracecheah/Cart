package learning;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

/**
 * DiscountChecker
 */
public class DiscountChecker {
  public static int applyDiscount(int price, Discount discount) {
    return price - discount.absoluteValue;
  }

  public static int solveAbsoluteDiscount(int price, Discount discount) {
    int total = price - (100 * discount.percentageValue / 100);
    return total;
  }

  public static boolean solveIsValidDiscount(String target) throws ParseException {
    Discount validDate = new Discount("08/15/2019", "08/20/2019");
    Date fromDate = new SimpleDateFormat("dd/MM/yyyy").parse(validDate.validFromDate);
    Date ToDate = new SimpleDateFormat("dd/MM/yyyy").parse(validDate.validToDate);
    Date insertedDate = new SimpleDateFormat("dd/MM/yyyy").parse(target);

    if (fromDate.compareTo(insertedDate) <= 0 && ToDate.compareTo(insertedDate) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  public static boolean solveSpecificProductDiscount(String target) {
    String[] values = { "laptop", "desktop" };
    if (Arrays.asList(values).contains(target)) {
      return true;
    } else {
      return false;
    }
  }

  public static int solveCartDiscount(int cart, int discount) {
    return cart - discount;
  }

}