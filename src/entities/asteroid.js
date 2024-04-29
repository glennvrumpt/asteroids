import Entity from "../entities/entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Sprite from "../components/sprite.js";
import Size from "../components/size.js";
import Rotation from "../components/rotation.js";

class Asteroid extends Entity {
  constructor(x, y, dx, dy, angle, speed) {
    super();

    this.addComponent(new Position(x, y));
    this.addComponent(new Velocity(dx, dy));
    this.addComponent(new Sprite("../assets/Asteroid.png"));
    this.addComponent(new Size(64, 64));
    this.addComponent(new Rotation(angle));
    this.speed = speed;
  }
}

export default Asteroid;
