public class Monster {
  String name;
  int hp = 35;
  int atk;

  Monster(String name) {
    this.name = name;
  }

  // monster is receiving damage
  void receiveDmg(int playerAtk) {
    this.hp -= playerAtk;
    String secondMessage = "The " + this.name + " has " + this.hp + " HP remaining";
    System.out.println(secondMessage);
  }

  Monster() {
    this.atk = 50;
    this.name = "Godzilla";
  }

  public static void main(String[] args) {

  }
}
