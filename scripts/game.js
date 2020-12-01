// Time-trackers

const START_TIME = new Date();

const ONE_SECOND = 1000;

// Variables used all around

const KEYS = {
  up: "w",
  left: "a",
  down: "s",
  right: "d",
  restart: "r",
};

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

let debug = false;

let currentScene;

if (debug) {
  currentScene = scenes.length - 1;
} else {
  currentScene = 1;
}

const FONT = "Verdana";

let gameIsRunning = true;

const UPDATE_TIME = 5;

const UNIT_SIZE = 50;

const PLAYER_VELOCITY = UNIT_SIZE / 10;

let startingX = UNIT_SIZE * 9;
let startingY = UNIT_SIZE * 4;

// Cubes

const PLAYER_CUBE = new PlayerCube(startingX, startingY);

class Game {
  static calculateTime() {
    const endTime = new Date();

    const elapsedMilliseconds = endTime.getTime() - START_TIME.getTime();

    let elapsedSeconds = Math.round(elapsedMilliseconds / ONE_SECOND);

    const elapsedMinutes = Math.floor(elapsedSeconds / 60);

    elapsedSeconds = elapsedSeconds - elapsedMinutes * 60;

    return [elapsedSeconds, elapsedMinutes];
  }

  static clearCanvas() {
    ctx.drawImage(AssetStore.getTexture("background"), 0, 0);
  }

  static detectKeyPress(event) {
    const keypress = event.key;

    if (keypress === KEYS.restart) {
      Game.restart();
    }
    PLAYER_CUBE.go(keypress);
  }

  static restart() {
    PLAYER_CUBE.stop(startingX, startingY);
    PLAYER_CUBE.isColliding = false;
  }

  static update() {
    if (gameIsRunning) {
      Game.clearCanvas();

      PLAYER_CUBE.update();
      UserInterface.displayText({
        x: 18,
        y: 1,
        size: "20px",
        content: `${this.calculateTime()[1]} : ${this.calculateTime()[0]}`,
      });
      UserInterface.displayText({
        x: 1,
        y: 1,
        size: "20px",
        content: `Level ${currentScene}`,
      });
    }

    scenes[currentScene - 1]();
  }
}

// Animate

AssetStore.loadTextures().then(() => {
  PLAYER_CUBE.texture = AssetStore.getTexture("player");

  setInterval(function () {
    UserInterface.playMusic("theme");
    Game.update();
  }, UPDATE_TIME);
});
