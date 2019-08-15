package learning;

/**
 * One
 */
public class One {

  public static int solve(int target) {
    int sum = 0;
    for (int i = 0; i < target; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
      }
    }
    return sum;
  }

  public static int solveFibonacci(int target) {
    int sum = 2;
    int firstNum = 1;
    int secondNum = 2;
    int currentNum = 3;

    while (currentNum < target) {
      currentNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = currentNum;

      if (currentNum % 2 == 0) {
        sum = sum + currentNum;
      }
    }

    return sum;
  }

  public static Long solvePrime(Long target) {
    Long result = 0L;

    return result;
  }
}