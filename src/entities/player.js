import Entity from "../entities/entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Sprite from "../components/sprite.js";
import Size from "../components/size.js";
import Rotation from "../components/rotation.js";
import Input from "../components/input.js";

class Player extends Entity {
  constructor(x, y) {
    super();

    this.addComponent(new Position(x, y));
    this.addComponent(new Velocity(0, 0));
    this.addComponent(new Sprite("../assets/images/Ship.png"));
    this.addComponent(new Size(64, 64));
    this.addComponent(new Rotation());
    this.addComponent(new Input());
  }
}

export default Player;
