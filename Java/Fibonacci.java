/**
 * Fibonacci
 */
public class Fibonacci {
  static int findFibonacci(int index) {
    if (index == 0) {
      return 1;
    }

    if (index == 1) {
      return 1;
    }

    // need to keep track of
    // - current index
    // - first number and second number
    // - or keep track of all numbers already calculated
    int firstNum = 1;
    int secondNum = 1;
    int currentNum = 0;

    int i = 1;
    while (i < index) {
      // number = sum of previous 2 numbers
      currentNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = currentNum;
      // i = 1
      // firstNum = 1
      // secondNum = 1
      // currentNum = 2

      // i = 2
      // firstNum = 1
      // secondNum = 2
      // currentNum = 3

      // i = 3
      // firstNum = 2
      // secondNum = 3
      // currentNum = 5

      i += 1;
    }

    return currentNum;
  }

  public static void main(String[] args) {
    System.out.println(findFibonacci(0));
    System.out.println(findFibonacci(1));
    System.out.println(findFibonacci(2));
    System.out.println(findFibonacci(3));
    System.out.println(findFibonacci(4));
    System.out.println(findFibonacci(10) == 89);
  }
}