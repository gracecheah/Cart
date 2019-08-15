package learning;

import junit.framework.TestCase;

/**
 * OneTest
 */
public class OneTest extends TestCase {

  public void testSolveTen() {
    // Given
    int target = 10;

    // When
    int result = One.solve(target);

    // Then
    assertEquals(23, result);
  }

  public void testSolveThousand() {
    // Given
    int target = 1000;

    // When
    int result = One.solve(target);

    // Then
    assertEquals(233168, result);
  }

  public void testFibonacci() {
    // Given
    int target = 4000000;

    // When
    int result = One.solveFibonacci(target);

    // Then
    assertEquals(4613732, result);
  }

}