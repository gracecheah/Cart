import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;

public class Shopping {

  public static void main(String args[]) {
    ArrayList<String> spec = new ArrayList<>();
    Integer total = 0;
    Boolean cont = true;
    String[][] model = { { "XPS 13", "888" }, { "Inspiron 15", "999" }, { "Latitude 14", "1099" } };
    String[][] screen = { { "1080p", "500" }, { "4k", "800" }, { "Touchscreen", "1000" } };
    String[][] processor = { { "i3", "500" }, { "i5", "1000" }, { "i7", "1500" } };
    String[][] ram = { { "8GB", "100" }, { "16GB", "200" }, { "32GB", "300" } };
    String[][] hdd = { { "256GB", "100" }, { "512GB", "200" }, { "1TB", "300" } };

    // while (cont == true) {
    System.out.println("Please Choose laptop model");
    spec.addAll(loadOption(model));
    System.out.println("Please Choose laptop screen");
    spec.addAll(loadOption(screen));
    System.out.println("Please Choose laptop processor");
    spec.addAll(loadOption(processor));
    System.out.println("Please Choose laptop ram");
    spec.addAll(loadOption(ram));
    System.out.println("Please Choose laptop hdd");
    spec.addAll(loadOption(hdd));

    System.out.println("==============================");
    System.out.println("You have choosen");
    for (int i = 0; i < spec.size(); i++) {
      System.out.print(spec.get(i));
      if ((i & 1) == 0) {
        System.out.print(" RM");
      } else {
        System.out.println();
        Integer price = Integer.parseInt(spec.get(i));
        total = total + price;
      }
    }
    System.out.println("Subtotal: RM" + total);
    // System.out.println("----------------------");
    // System.out.println("----------------------");
    // System.out.println("1: Add to Cart");
    // System.out.println("2: Continue Shopping");
    // System.out.println("----------------------");

    // Scanner userInput = new Scanner(System.in);
    // Integer action = Integer.parseInt(userInput.nextLine());
    // if (action == 1) {
    // cont = false;
    System.out.println("Please Enter Discount Voucher Code");
    Scanner userInput2 = new Scanner(System.in);
    String voucher = userInput2.nextLine();
    if (voucher.equals("Dell10")) {
      Double discountedtotal = (double) total * 0.9;
      System.out.println("Total After Discount: RM" + discountedtotal);
    } else {
      System.out.println("Voucher not valid");
      System.out.println("Total: RM" + total);
    }
    // }
    // }

  }

  static ArrayList<String> loadOption(String[][] array) {
    ArrayList<String> option = new ArrayList<>();
    for (int i = 0; i < array.length; i++) {
      System.out.print(i + 1 + ":");
      for (int j = 0; j < array[i].length; j++) {
        System.out.print(array[i][j]);
        if (j < array[i].length - 1)
          System.out.print(" RM");
      }
      System.out.println();
    }

    Scanner userInput = new Scanner(System.in);
    Integer choice = Integer.parseInt(userInput.nextLine());
    option.add(array[choice - 1][0]);
    option.add(array[choice - 1][choice]);
    return option;
  }

}