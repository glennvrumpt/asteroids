import { generateAsteroids } from "./utils/utilities.js";
import Player from "./entities/player.js";
import Input from "./systems/input.js";
import Rotation from "./systems/rotation.js";
import Movement from "./systems/movement.js";
import Firing from "./systems/firing.js";
import Collision from "./systems/collision.js";
import Rendering from "./systems/rendering.js";

const backgroundColors = ["#36454F", "#343434", "#28282B", "#353935"];

const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = backgroundColors[Math.floor(Math.random() * 4)];
const asteroids = generateAsteroids(20, canvas.width, canvas.height);

const x = canvas.width / 2 - 32;
const y = canvas.height / 2 - 32;

const player = new Player(x, y);
const entities = [player, ...asteroids];

const systems = [
  new Input(),
  new Rotation(),
  new Movement(),
  new Firing(),
  new Collision(canvas),
  new Rendering(canvas),
];

const mainLoop = (lastTime) => {
  const currentTime = performance.now();
  const deltaTime = (currentTime - lastTime) / 1000;

  systems.forEach((system) => {
    system.update(entities, deltaTime);
  });

  requestAnimationFrame(() => mainLoop(currentTime));
};

mainLoop(performance.now());
