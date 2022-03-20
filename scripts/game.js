const START_TIME = new Date();
const ONE_SECOND = 1000;
const debug =
  new URLSearchParams(window.location.search).get("debug") === "true";
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;
let currentScene = 1;
const FONT = "Verdana";
let gameIsRunning = true;
const UPDATE_TIME = 5;
const UNIT_SIZE = 50;
const PLAYER_VELOCITY = UNIT_SIZE / 8;
let startingX = UNIT_SIZE * 9;
let startingY = UNIT_SIZE * 4;

const PLAYER_CUBE = new PlayerCube(startingX, startingY);

class Game {
  static calculateTime() {
    const endTime = new Date();
    const elapsedMilliseconds = endTime.getTime() - START_TIME.getTime();
    let elapsedSeconds = Math.round(elapsedMilliseconds / ONE_SECOND);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);

    elapsedSeconds = elapsedSeconds - elapsedMinutes * 60;
    return { elapsedSeconds, elapsedMinutes };
  }

  static stringSearch({ string, keyword }) {
    if (string.search(keyword) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  static handleClick({ clickX, clickY, event }) {
    let levelArray = Converter.convertToArray(sandbox.level, ";");
    let isEmpty = true;
    const xKeyword = `x: ${Math.floor(clickX / UNIT_SIZE)}`;
    const yKeyword = `y: ${Math.floor(clickY / UNIT_SIZE)}`;

    for (const index in levelArray) {
      const value = levelArray[index];
      if (
        this.stringSearch({
          string: value,
          keyword: xKeyword,
        }) &&
        this.stringSearch({
          string: value,
          keyword: yKeyword,
        })
      ) {
        levelArray.splice(parseInt(index), 1);
        sandbox.level = levelArray.join(";").toString();
        isEmpty = false;
      }
    }
    if (isEmpty) {
      Sandbox.addObject({
        type: sandbox.object,
        x: Math.floor(mouseX / UNIT_SIZE),
        y: Math.floor(mouseY / UNIT_SIZE),
      });
    }
  }

  static checkDebug() {
    if (debug) {
      scenes.push(() => {});
      currentScene = scenes.length;
      Sandbox.createUtils();
      debugListener();
    }
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
  }

  static update() {
    if (gameIsRunning) {
      Game.clearCanvas();
      PLAYER_CUBE.update();
      scenes[currentScene - 1]();
      UserInterface.displayText({
        x: 18,
        y: 1,
        size: "20px",
        content: `${this.calculateTime().elapsedMinutes} : ${
          this.calculateTime().elapsedSeconds
        }`,
      });
      UserInterface.displayText({
        x: 1,
        y: 1,
        size: "20px",
        content: `Level ${currentScene}`,
      });
      if (debug) {
        Sandbox.update();
      }
    }
  }
}

AssetStore.loadTextures().then(() => {
  PLAYER_CUBE.texture = AssetStore.getTexture("player");
  Game.checkDebug();

  setInterval(function () {
    Game.update();
  }, UPDATE_TIME);
});
