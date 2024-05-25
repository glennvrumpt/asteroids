import System from "./system.js";

class Collision extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
  }

  checkCircleCollision(entityA, entityB) {
    const posA = entityA.getComponent("Position");
    const sizeA = entityA.getComponent("Size");
    const posB = entityB.getComponent("Position");
    const sizeB = entityB.getComponent("Size");

    const radiusA = sizeA.width / 2;
    const radiusB = sizeB.width / 2;

    const dx = posA.x + radiusA - (posB.x + radiusB);
    const dy = posA.y + radiusA - (posB.y + radiusB);
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < radiusA + radiusB;
  }

  wrapAsteroid(asteroid) {
    const { width, height } = this.canvas;
    const position = asteroid.getComponent("Position");
    const size = asteroid.getComponent("Size");

    if (position.x < -size.width) {
      position.x = width;
    } else if (position.x > width) {
      position.x = -size.width;
    }

    if (position.y < -size.height) {
      position.y = height;
    } else if (position.y > height) {
      position.y = -size.height;
    }
  }

  checkWallCollision(entity) {
    const { width, height } = this.canvas;
    const position = entity.getComponent("Position");
    const size = entity.getComponent("Size");

    if (position.x < 0) {
      position.x = 0;
    } else if (position.x + size.width > width) {
      position.x = width - size.width;
    }

    if (position.y < 0) {
      position.y = 0;
    } else if (position.y + size.height > height) {
      position.y = height - size.height;
    }
  }

  update(entities) {
    const lasers = entities.filter((entity) =>
      entity.getComponent("Sprite")?.image.src.includes("Laser")
    );

    const asteroids = entities.filter((entity) =>
      entity.getComponent("Sprite")?.image.src.includes("Asteroid")
    );

    const player = entities.find((entity) =>
      entity.getComponent("Sprite")?.image.src.includes("Ship")
    );

    lasers.forEach((laser) => {
      asteroids.forEach((asteroid) => {
        if (this.checkCircleCollision(laser, asteroid)) {
          entities.splice(entities.indexOf(laser), 1);
          entities.splice(entities.indexOf(asteroid), 1);
        }
      });
    });

    if (player) {
      asteroids.forEach((asteroid) => {
        if (this.checkCircleCollision(player, asteroid)) {
          const position = player.getComponent("Position");
          position.x = this.canvas.width / 2 - 32;
          position.y = this.canvas.height / 2 - 32;
        }
      });

      this.checkWallCollision(player);
    }

    asteroids.forEach((asteroid) => {
      this.wrapAsteroid(asteroid);
    });
  }
}

export default Collision;
