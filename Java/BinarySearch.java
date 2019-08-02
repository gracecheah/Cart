import java.util.Arrays;

public class BinarySearch {

  static int bsearch(int[] array, int target) {
    int index = 0;
    int midPoint = 0;
    int arraySize = array.length;
    midPoint = (int) Math.round(arraySize / 2); // 3

    if (array[midPoint] == target) {
      index = midPoint;
    } else if (target > array[midPoint]) {
      for (int i = midPoint; i < arraySize; i++) {
        if (array[i] == target) {
          index = i;
        }
      }
    } else {
      for (int i = midPoint - 1; i > 0; i--) {
        if (array[i] == target) {
          index = i;
        }
      }
    }
    return index;
  }

  public static void main(String[] args) {
    int[] arr = { 7, 9, 21, 42, 58, 67, 88 };
    System.out.println(bsearch(arr, 67) == 5);
    System.out.println(bsearch(arr, 9) == 1);
    System.out.println(bsearch(arr, 88) == 6);
  }

}