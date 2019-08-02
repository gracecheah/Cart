
/**
 * Bus
 */
import java.util.ArrayList;

public class Bus {
  ArrayList<Wheel> wheels;
  int numWheels = 6;

  Bus() {
    this.wheels = new ArrayList<>();

    while (this.wheels.size() < this.numWheels) {
      this.wheels.add(new Wheel());
    }
  }

  public static void main(String[] args) {
    Bus busWheel = new Bus();
    System.out.println(busWheel.wheels.size());

  }
}