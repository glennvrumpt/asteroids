import Asteroid from "../entities/asteroid.js";

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateAsteroids = (count, canvasWidth, canvasHeight) => {
  const asteroids = [];

  for (let i = 0; i < count; i++) {
    const x = getRandom(0, canvasWidth);
    const y = getRandom(0, canvasHeight);

    const angle = getRandom(0, 360);
    const speed = 100;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    const asteroid = new Asteroid(x, y, dx, dy, angle, speed);
    asteroids.push(asteroid);
  }

  return asteroids;
};

export { getRandom, generateAsteroids };
