/**
 * BankAccount
 */
public class BankAccount {
  String accountNumber = "11111111";
  private String password = "password";
  private int balance = 50000;

  public boolean verifyPassword(String password) {
    return this.password.equals(password);
  }

  public int getBalance() {
    return this.balance;
  }

  public void withdrawMoney(int amountWithdrawn) {
    this.balance -= amountWithdrawn;
  }
}
