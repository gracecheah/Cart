/**
 * ATM
 */
public class ATM {
  BankAccount account;
  boolean isLoggedIn = false;

  ATM() {
  }

  void insertCard(BankAccount bankAccount) {
    this.account = bankAccount;
  }

  void login(String password) {
    this.isLoggedIn = this.account.verifyPassword(password);
    if (this.isLoggedIn) {
      System.out.println("You have successfully logged in!");
    }
  }

  void checkBalance() {
    System.out.println(this.account.getBalance());
  }

  void withdrawMoney(int amountWithdrawn) {
    if (this.isLoggedIn) {
      this.account.withdrawMoney(amountWithdrawn);
    }
  }

  public static void main(String[] args) {
    BankAccount bankAccount = new BankAccount();
    ATM atm = new ATM();

    // // insertCard => Provides bank account
    atm.insertCard(bankAccount);
    // // login => Provide PIN to login to bank account
    atm.login("password");
    // // checkBalance => Print out remaining balance in account
    atm.checkBalance();
    // // withdrawMoney => Print out how much withdrawn, and the remaining balance
    atm.withdrawMoney(500);

    atm.checkBalance();
  }
}
