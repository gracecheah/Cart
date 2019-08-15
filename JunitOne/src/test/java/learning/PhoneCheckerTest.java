package learning;

import junit.framework.TestCase;

/**
 * PhoneCheckerTest
 */
public class PhoneCheckerTest extends TestCase {

  public void testCheck() {
    // Given
    String phoneNumber = "0137788064";

    // When
    boolean valid = PhoneChecker.check(phoneNumber);

    // Then
    assertEquals(valid, true);
  }
}