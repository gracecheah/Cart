import java.utils.ArrayList;

public class Vehicle {
  ArrayList<Wheel> wheels;
  int numWheels;
  int wheelSize;

  Vehicle() {
    this.wheels = new ArrayList<>();

    while (this.wheels.size() < this.numWheels) {
      this.wheels.add(new Wheel(wheelSize));
    }
  }
}
