import Entity from "../entities/entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Sprite from "../components/sprite.js";
import Size from "../components/size.js";
import Rotation from "../components/rotation.js";

class Projectile extends Entity {
  constructor(x, y, dx, dy, angle) {
    super();

    this.addComponent(new Position(x, y));
    this.addComponent(new Velocity(dx, dy));
    this.addComponent(new Sprite("../assets/Laser.png"));
    this.addComponent(new Size(16, 16));
    this.addComponent(new Rotation(angle));
  }
}

export default Projectile;
