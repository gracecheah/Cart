/**
 * Website
 */
public class Website {
  String siteName;
  boolean isLoggedIn = false;

  Website(String siteName) {
    this.siteName = siteName;
  }

  private void login(User user, String password) {
    this.isLoggedIn = user.verifyPassword(password);
    if (this.isLoggedIn) {
      System.out.println(user.username() + " has logged in successfully to " + this.siteName);
    } else {
      System.out.println("Unsuccessful login!");
    }
  }

  public static void main(String[] args) {
    Website nextacademy = new Website("NextAcademy");
    User user = new User("test", "password");

    String password = "hacking";
    nextacademy.login(user, password);
    // Unsuccessful login!
    System.out.println(nextacademy.isLoggedIn); // false

    password = "password";
    nextacademy.login(user, password);
    // test has logged in successfully to NextAcademy
    System.out.println(nextacademy.isLoggedIn); // true

    // user.password returns error
    // user.username returns error
    System.out.println(user.username()); // "test"
    user.setUserName("newUserName", "password");
    System.out.println(user.username());
  }
}