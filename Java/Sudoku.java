/**
 * Sudoku
 */
public class Sudoku {
  static void displayBoard(String boardString) {
    String[] boardRows = { "", "", "", "", "", "", "", "", "" };
    char[] boardArray = boardString.toCharArray();
    for (int index = 0; index < boardString.length(); index++) {
      boardRows[index / 9] = boardRows[index / 9] + " " + boardArray[index];
      if (index % 9 == 2 || index % 9 == 5) {
        boardRows[index / 9] = boardRows[index / 9] + " |";
      }
    }
    System.out.println("-------------------------");
    for (int index = 0; index < 9; index++) {
      System.out.println("|" + boardRows[index] + " |");
      if (index == 2 || index == 5) {
        System.out.println("-------------------------");
      }
    }
    System.out.println("-------------------------");
  }

  static String solve(String boardString) {
    displayBoard(boardString);

    return "";
  }

  public static void main(String[] args) {
    // Easy Mode
    String solution = solve("105802000090076405200400819019007306762083090000061050007600030430020501600308900");
    System.out
        .println(solution.equals("145892673893176425276435819519247386762583194384961752957614238438729561621358947"));

    // // Hard Mode
    // String solution =
    // solve("400000805030000000000700000020000060000080400000010000000603070500200000104000000");
    // System.out.println(solution.equals("417369825632158947958724316825437169791586432346912758289643571573291684164875293"));
  }
}