import java.util.Scanner;

/**
 * PokemonBattle
 */

// Requirement Phase 1:
// - 2 Pokemon
// - Skill Used
// - Hp Reduction
// - Win Condition
// - Declare Winner

// Requirement Phase 2:
// - List Moves
// - Select Move

// Requirement Phase 3:
// - Turns

public class PokemonBattle {
  static int executeMove(String move) {
    if (move.equals("Scratch")) {
      return 10;
    }
    if (move.equals("Tackle")) {
      return 5;
    }
    if (move.equals("Ember")) {
      return 20;
    }
    if (move.equals("Thundershock")) {
      return 15;
    }
    return 0;
  }

  public static void main(String args[]) {
    boolean isPlayerTurn = true;
    String playerPokemon = "Charmander";
    int playerPokemonHp = 50;
    String[] playerSkills = { "Scratch", "Ember" };

    String oppPokemon = "Pikachu";
    int oppPokemonHp = 50;
    String[] oppSkills = { "Tackle", "Thundershock" };

    int damageDealt = 0;
    Scanner userInput = new Scanner(System.in);

    System.out.println("You've encountered Pikachu");

    while (oppPokemonHp > 0 && playerPokemonHp > 0) {
      if (isPlayerTurn) {
        System.out.println("It's your turn, pick a move");
        for (int i = 0; i < playerSkills.length; i++) {
          System.out.println(i + " . " + playerSkills[i]);
        }

        Integer skillIndex = Integer.parseInt(userInput.nextLine());

        System.out.println(playerPokemon + " uses " + playerSkills[skillIndex]);
        damageDealt = executeMove(playerSkills[skillIndex]);
        System.out.println(oppPokemon + " takes " + damageDealt + "damage.");
        oppPokemonHp -= damageDealt;
        System.out.println(oppPokemon + " has " + oppPokemonHp + "Hp remaining.");
      } else {
        System.out.println(oppPokemon + " uses " + oppSkills[1]);
        damageDealt = executeMove(oppSkills[1]);
        System.out.println(playerPokemon + " takes " + damageDealt + "damage.");
        playerPokemonHp -= damageDealt;
        System.out.println(playerPokemon + " has " + playerPokemonHp + "Hp remaining.");
      }
      System.out.println("---------------------------");

      isPlayerTurn = !isPlayerTurn;
    }

    if (oppPokemonHp <= 0) {
      System.out.println(oppPokemon + " has fainted. You've won!");
    }
    if (playerPokemonHp <= 0) {
      System.out.println(playerPokemon + " has fainted. Game OVER!");
    }

    // System.out.println( playerPokemon + " uses " + playerSkill);
    // System.out.println( oppPokemon + " takes " + damageDealt + "damage.");
    // oppPokemonHp -= damageDealt;
    // System.out.println( oppPokemon + " has " + oppPokemonHp + "Hp remaining.");

    // System.out.println( oppPokemon + " uses " + oppSkill);
    // damageDealt = executeMove(oppSkill);
    // System.out.println( playerPokemon + " takes " + damageDealt + "damage.");
    // playerPokemonHp -= damageDealt;
    // System.out.println( playerPokemon + " has " + playerPokemonHp + "Hp
    // remaining.");

    // System.out.println( playerPokemon + " uses " + playerSkill);
    // damageDealt = executeMove(playerSkill);
    // System.out.println( oppPokemon + " takes " + damageDealt + "damage.");
    // oppPokemonHp -= damageDealt;

  }

}