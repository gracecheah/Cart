package learning;

import java.text.ParseException;

import junit.framework.TestCase;

/**
 * DiscountTest
 */
public class DiscountTest extends TestCase {

  public void testAbsoluteDiscount() {
    // Given
    int productPrice = 500;
    Discount absoluteDiscount = new Discount(200);
    // When
    int finalPrice = DiscountChecker.applyDiscount(productPrice, absoluteDiscount);
    // Then
    assertEquals(300, finalPrice);
  }

  public void testPercentageDiscount() {
    int price = 100;
    Discount discountPercentage = new Discount(20);
    int result = DiscountChecker.solveAbsoluteDiscount(price, discountPercentage);
    assertEquals(80, result);
  }

  public void testIsValidDiscount() throws ParseException {

    boolean valid = DiscountChecker.solveIsValidDiscount("08/18/2019");
    assertEquals(true, valid);
  }

  public void testSpecificProductDiscounts() {
    String discountItem = "laptop";
    boolean valid = DiscountChecker.solveSpecificProductDiscount(discountItem);
    assertEquals(true, valid);
  }

  public void testCartDiscounts() {
    int cart = 1000;
    int discount = 100;
    int result = DiscountChecker.solveCartDiscount(cart, discount);
    assertEquals(900, result);
  }

}