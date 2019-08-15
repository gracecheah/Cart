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

  public static boolean solveIsValidDiscount(Discount target) throws ParseException {
    Date insertedDate = new SimpleDateFormat("dd/MM/yyyy").parse(target.validToDate);
    Date date = new Date();
    if (date.compareTo(insertedDate) >= 0) {
      return false;
    } else {
      return true;
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
}