public class Player {
  int hp = 100;
  int atk;
  String name;

  Player(String name) {
    this.name = name;
    this.atk = 15;
  }

  void hit(Monster monster) {
    String message = this.name + " hits the " + monster.name + " for " + this.atk + " damage";
    System.out.println(message);
    monster.receiveDmg(this.atk);
  }

  void hello() {
    System.out.println("Hello, my name is " + this.name);
  }

  public static void main(String[] args) {
    Player player = new Player("John");
    Monster monster = new Monster("Ogre");
    player.hit(monster);
  }
}
