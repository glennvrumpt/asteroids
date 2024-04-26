import System from "./system.js";
import Projectile from "../entities/projectile.js";
import { getForwardVector } from "../utils/math.js";

class Firing extends System {
  constructor() {
    super();
    this.cooldown = 0;
    this.fireRate = 0.5;
    this.laserOffset = 16;
  }

  update(entities, deltaTime) {
    this.cooldown -= deltaTime;

    entities.forEach((entity) => {
      const input = entity.getComponent("Input");
      const position = entity.getComponent("Position");
      const rotation = entity.getComponent("Rotation");

      if (input && position && rotation) {
        if (input.keys[" "]) {
          if (this.cooldown <= 0) {
            const forwardVector = getForwardVector(rotation.angle);

            const centerOffsetX = 24;
            const centerOffsetY = 24;

            const additionalOffsetX = forwardVector.x * this.laserOffset;
            const additionalOffsetY = forwardVector.y * this.laserOffset;

            const projectileStartX =
              position.x + centerOffsetX + additionalOffsetX;
            const projectileStartY =
              position.y + centerOffsetY + additionalOffsetY;

            const projectile = new Projectile(
              projectileStartX,
              projectileStartY,
              forwardVector.x * 800,
              forwardVector.y * 800,
              rotation.angle
            );

            this.cooldown = this.fireRate;
            entities.push(projectile);
          }
        }
      }
    });
  }
}

export default Firing;
