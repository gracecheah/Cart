import java.util.ArrayList;
import java.util.Arrays;

public class Todo {
  public static void main(String[] args) {
    String[] oldList = { "Buy Groceries", "Make Breakfast", "Mark Assignments" };
    oldList[1] = "New thing";

    ArrayList<String> list = new ArrayList<>();
    list.add("Buy Groceries");
    list.add("Make Breakfast");
    list.add("Mark Assignments");
    list.add("Do Homework");

    for (int i = 0; i < list.size(); i++) {
      System.out.println((i + 1) + ". " + list.get(i));
    }

    // an array of boolean
    ArrayList<Boolean> boolList = new ArrayList<>();
    boolList.add(false);
    boolList.add(false);
    boolList.add(true);

    for (int i = 0; i < boolList.size(); i++) {
      System.out.println((i + 1) + "-" + boolList.get(i));
    }

    ArrayList<Integer> intList = new ArrayList<>();
    intList.add(1);
    intList.add(2);
    intList.add(3);

    for (int i = 0; i < intList.size(); i++) {
      System.out.println((i + 1) + "-" + intList.get(i));
    }

  }
}
