import System from "./system.js";
import { getForwardVector } from "../utils/math.js";

class Movement extends System {
  update(entities, deltaTime) {
    entities.forEach((entity) => {
      const position = entity.getComponent("Position");
      const velocity = entity.getComponent("Velocity");
      const sprite = entity.getComponent("Sprite");
      const input = entity.getComponent("Input");
      const rotation = entity.getComponent("Rotation");

      if (position && velocity) {
        position.x += velocity.dx * deltaTime;
        position.y += velocity.dy * deltaTime;
      }

      if (input && rotation) {
        const movementSpeed = 300;

        if (input.keys["w"]) {
          const forwardVector = getForwardVector(rotation.angle);

          velocity.dx = forwardVector.x * movementSpeed;
          velocity.dy = forwardVector.y * movementSpeed;

          sprite.image.src = "../assets/ShipWithThrust.png";
        } else {
          velocity.dx = 0;
          velocity.dy = 0;

          sprite.image.src = "../assets/Ship.png";
        }
      }
    });
  }
}

export default Movement;
