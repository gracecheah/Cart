import java.util.ArrayList;

public class OrangeTree {
  ArrayList<Orange> oranges;

  OrangeTree() {
    this.oranges = new ArrayList<>();
    this.oranges.add(new Orange());
    this.oranges.add(new Orange());
    this.oranges.add(new Orange());
    this.oranges.add(new Orange());
    this.oranges.add(new Orange());
  }

  Orange pickOrange() {
    // removes one orange from the current tree's oranges
    Orange removedOrange = this.oranges.remove(0);
    return removedOrange;
  }

  public static void main(String[] args) {
    OrangeTree tree = new OrangeTree();
    System.out.println(tree.oranges.size());
    Orange orange = tree.pickOrange();
    System.out.println(orange);
    System.out.println(tree.oranges.size());
    System.out.println(orange.size);
    System.out.println(orange.state);
  }
}
