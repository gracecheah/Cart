/**
 * BinarySearch
 */
public class BinarySearch_tutor {

  static int bsearch(int[] array, int target) {
    int start = 0;
    int end = array.length - 1;
    // array = {7,9,21,42,58,67,88}
    // start = 0
    // end = 6
    // midpoint = 3
    // int elem = 42

    while (true) {
      int midpoint = (start + end) / 2;
      int elem = array[midpoint];

      System.out.println("start: " + start);
      System.out.println("end: " + end);
      System.out.println("midpoint: " + midpoint);
      System.out.println("elem: " + elem);
      System.out.println("-------------------");

      if (elem == target) {
        return midpoint;
      }

      if (elem > target) {
        end = midpoint;
      }

      if (elem < target) {
        start = midpoint;
      }
    }

    // iteration 1
    // midpoint = 3
    // elem = 42
    // target = 67
    // -> start -> 3
    // end iteration

    // iteration 2
    // midpoint = (3 + 6) / 2
    // midpoint = 4
    // elem = 58
    // -> start -> 4
    // end iteration

    // iteration 3
    // midpoint = (4 + 6) / 2 => 5
    // elem = 67
    // end while loop
  }

  public static void main(String[] args) {
    int[] arr = { 7, 9, 21, 42, 58, 67, 73, 88 };

    System.out.println(bsearch(arr, 67) == 5);
    System.out.println(bsearch(arr, 9) == 1);
    System.out.println(bsearch(arr, 88) == 6);
  }
}