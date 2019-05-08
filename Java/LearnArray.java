import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class LearnArray {
  public static void main(String[] args) {

    Integer[] x = { 8, 5, 1, 2, 7, 4 };
    ArrayList<Integer> xList = new ArrayList<>((Arrays.asList(x)));
    xList.remove(2);
    System.out.println("Remove 3rd Number - " + xList);
    // xList.sort(Comparator.naturalOrder());
    Collections.sort(xList);
    System.out.println("Sorted - " + xList);
    System.out.println("Index of 7 - " + xList.indexOf(7));
    System.out.println("If contains 4 - " + xList.contains(4));
    System.out.println("Element of Index 4 - " + xList.get(4));
    xList.set(2, 123);
    System.out.println("Array updated - " + xList);

    indexFunction(xList);
    boolFunction(xList);
  }

  static Integer indexFunction(ArrayList<Integer> y) {
    System.out.println(y.indexOf(7));
    return y.indexOf(7);
  }

  static Boolean boolFunction(ArrayList<Integer> y) {
    System.out.println(y.contains(4));
    return y.contains(4);
  }

}