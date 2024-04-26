import System from "./system.js";

class Rendering extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  update(entities) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    entities.forEach((entity) => {
      const position = entity.getComponent("Position");
      const size = entity.getComponent("Size");
      const sprite = entity.getComponent("Sprite");
      const rotation = entity.getComponent("Rotation");

      if (position && size && sprite) {
        this.context.save();

        if (rotation) {
          this.context.translate(
            position.x + size.width / 2,
            position.y + size.height / 2
          );
          const angleInRadians = (rotation.angle * Math.PI) / 180;
          this.context.rotate(angleInRadians);
        } else {
          this.context.translate(position.x, position.y);
        }

        this.context.drawImage(
          sprite.image,
          -size.width / 2,
          -size.height / 2,
          size.width,
          size.height
        );

        this.context.restore();
      }
    });
  }
}

export default Rendering;
