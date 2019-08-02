
/**
 * Car
 */
import java.util.ArrayList;

public class Car extends Vehicle {
  ArrayList<Wheel> wheels;
  int numWheels = 4;
  int wheelSize = 16;

  Car() {
    this.wheels = new ArrayList<>();
    while (this.wheels.size() < this.numWheels) {
      this.wheels.add(new Wheel());
    }
  }

  public static void main(String[] args) {
    Car carWheel = new Car();
    System.out.println(carWheel.wheels.size());

  }
}