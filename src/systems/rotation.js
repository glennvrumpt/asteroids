import System from "./system.js";

class Rotation extends System {
  update(entities, deltaTime) {
    const rotationSpeed = 200;

    entities.forEach((entity) => {
      const rotation = entity.getComponent("Rotation");
      const input = entity.getComponent("Input");

      if (rotation && input) {
        if (input.keys["a"]) {
          rotation.angle -= rotationSpeed * deltaTime;
        }

        if (input.keys["d"]) {
          rotation.angle += rotationSpeed * deltaTime;
        }
      }
    });
  }
}

export default Rotation;
