/**
 * User
 */
public class User {
  private String username;
  private String password;

  User(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public boolean verifyPassword(String password) {
    return this.password.equals(password);
  }

  public String username() {
    return this.username;
  }

  public void setUserName(String newUserName, String password) {
    if (this.password.equals(password)) {
      this.username = newUserName;
    }
  }
}