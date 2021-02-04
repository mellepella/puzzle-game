class Scenes {
  static winningScene() {
    if (gameIsRunning) {
      const elapsedSeconds = Game.calculateTime()[0];
      const elapsedMinutes = Game.calculateTime()[1];

      const winningMessage = `You finished in ${elapsedMinutes} minute(s) and ${elapsedSeconds} second(s).`;

      Game.clearCanvas();

      UserInterface.displayText({
        x: 3.5,
        y: 4,
        size: "30px",
        content: winningMessage,
      });
      UserInterface.displayText({
        x: 8,
        y: 5,
        size: "20px",
        content: "(Press f5 to restart)",
      });

      gameIsRunning = false;
    }
  }
}

const scenes = [
  () => {
    CubeCreator.create({ type: WinningCube, x: 6, y: 4 }).update();
    UserInterface.displayText({
      x: 5,
      y: 1,
      size: "20px",
      content: "Get to the Coin to proceed to the next level!",
    });
    UserInterface.displayText({
      x: 5.8,
      y: 2,
      size: "18px",
      content: "(Use the W, A, S, D keys to move around)",
    });
  },
  () => {
    UserInterface.displayText({
      x: 3.5,
      y: 1,
      size: "20px",
      content:
        "Use the obstacles to stop and change the direction you're going!",
    });
    CubeCreator.create({ type: WinningCube, x: 4, y: 3 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 7, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 13, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 7 }).update();
  },
  () => {
    UserInterface.displayText({
      x: 3,
      y: 1,
      size: "20px",
      content:
        "If you get stuck, press the R key to restart from the start of the level.",
    });
    CubeCreator.create({ type: WinningCube, x: 12, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 13, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 7 }).update();
  },
  () => {
    UserInterface.displayText({
      x: 0.5,
      y: 2,
      size: "17px",
      content: "Try to finish the levels as fast as you can!",
    });
    UserInterface.displayText({
      x: 0.5,
      y: 2.5,
      size: "13px",
      content:
        "Your time will be displayed in the right upper corner. Good luck!",
    });
    CubeCreator.create({ type: WinningCube, x: 9, y: 1 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 10, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 3 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 4, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 8, y: 0 }).update();
  },
  () => {
    CubeCreator.create({ type: WinningCube, x: 7, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 10, y: 1 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 8, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 2 }).update();
  },
  () => {
    CubeCreator.create({ type: WinningCube, x: 8, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 7, y: 1 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 3 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 10, y: 0 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 10, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 4 }).update();
  },
  () => {
    CubeCreator.create({ type: WinningCube, x: 6, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 13, y: 1 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 8, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 14, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 7, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 10, y: 8 }).update();
  },
  () => {
    CubeCreator.create({ type: WinningCube, x: 4, y: 4 }).update();
    CubeCreator.create({ type: WinningCube, x: 10, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 7, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 14, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 13, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 4, y: 3 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 8 }).update();
  },
  () => {
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 13, y: 6 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 2 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 14, y: 3 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 8 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 4, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 1 }).update();
    CubeCreator.create({ type: WinningCube, x: 8, y: 1 }).update();
  },
  () => {
    CubeCreator.create({ type: WinningCube, x: 9, y: 6 }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 13,
      y: 4,
      tpX: 4,
      tpY: 6,
      color: "Blue",
    }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 4,
      y: 6,
      tpX: 13,
      tpY: 4,
      color: "Green",
    }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 5 }).update();
    UserInterface.displayText({
      x: 5,
      y: 1,
      size: "20px",
      content: "Try using the blue portal to reach the Coin!",
    });
  },
  () => {
    CubeCreator.create({ type: WinningCube, x: 9, y: 8 }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 9,
      y: 2,
      tpX: 13,
      tpY: 8,
      color: "Blue",
    }).update();
    CubeCreator.create({ type: ObstacleCube, x: 9, y: 7 }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 13,
      y: 8,
      tpX: 9,
      tpY: 2,
      color: "Green",
    }).update();
    CubeCreator.create({ type: ObstacleCube, x: 13, y: 4 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 5 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 7, y: 0 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 11, y: 1 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 10, y: 3 }).update();
  },
  () => {
    CubeCreator.create({ type: ObstacleCube, x: 6, y: 3 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 12, y: 4 }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 11,
      y: 6,
      tpX: 12,
      tpY: 2,
      color: "Blue",
    }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 12,
      y: 2,
      tpX: 11,
      tpY: 6,
      color: "Green",
    }).update();
    CubeCreator.create({ type: ObstacleCube, x: 7, y: 7 }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 2 }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 6,
      y: 7,
      tpX: 6,
      tpY: 0,
      color: "Red",
    }).update();
    CubeCreator.create({
      type: PortalCube,
      x: 6,
      y: 0,
      tpX: 6,
      tpY: 7,
      color: "Purple",
    }).update();
    CubeCreator.create({ type: ObstacleCube, x: 5, y: 6 }).update();
    CubeCreator.create({ type: WinningCube, x: 10, y: 2 }).update();
  },
  () => {
    CubeCreator.create({ 
      type: ObstacleCube, 
      x: 13, 
      y: 4,
      color: "Blue",
      tpX: 0,
      tpY: 0
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 12, 
      y: 7,
      color: "Blue",
      tpX: 0,
      tpY: 0
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 9, 
      y: 6,
      color: "Blue",
      tpX: 0,
      tpY: 0
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 17, 
      y: 6,
      color: "Blue",
      tpX: 0,
      tpY: 0
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 14, 
      y: 5,
      color: "Blue",
      tpX: 0,
      tpY: 0
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 16, 
      y: 2,
      color: "Blue",
      tpX: 14,
      tpY: 2
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 14, 
      y: 2,
      color: "Blue",
      tpX: 16,
      tpY: 2
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 14, 
      y: 0,
      color: "Blue",
      tpX: 16,
      tpY: 2
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 12, 
      y: 1,
      color: "Blue",
      tpX: 16,
      tpY: 2
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 18, 
      y: 3,
      color: "Purple",
      tpX: 18,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 18, 
      y: 7,
      color: "Purple",
      tpX: 18,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 18, 
      y: 1,
      color: "Purple",
      tpX: 18,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 15, 
      y: 9,
      color: "Purple",
      tpX: 18,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 19, 
      y: 8,
      color: "Purple",
      tpX: 18,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 10, 
      y: 2,
      color: "Purple",
      tpX: 18,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 11, 
      y: 8,
      color: "Purple",
      tpX: 18,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 7, 
      y: 7,
      color: "Green",
      tpX: 11,
      tpY: 1
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 11, 
      y: 1,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 7, 
      y: 1,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 8, 
      y: 9,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 12, 
      y: 3,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 7, 
      y: 4,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 6, 
      y: 3,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 3, 
      y: 2,
      color: "Green",
      tpX: 7,
      tpY: 7
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 4, 
      y: 5,
      color: "Red",
      tpX: 4,
      tpY: 1
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 4, 
      y: 1,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 4, 
      y: 3,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 7, 
      y: 8,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 6, 
      y: 9,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 1, 
      y: 8,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 2, 
      y: 4,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 1, 
      y: 5,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 2, 
      y: 1,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 7, 
      y: 0,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 19, 
      y: 0,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: ObstacleCube, 
      x: 12, 
      y: 9,
      color: "Red",
      tpX: 4,
      tpY: 5
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 2, 
      y: 9,
      color: "Blue",
      tpX: 5,
      tpY: 3
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 5, 
      y: 3,
      color: "Blue",
      tpX: 2,
      tpY: 9
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 18, 
      y: 9,
      color: "Green",
      tpX: 0,
      tpY: 0
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 0, 
      y: 0,
      color: "Green",
      tpX: 18,
      tpY: 9
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 8, 
      y: 4,
      color: "Purple",
      tpX: 8,
      tpY: 6
    }).update();CubeCreator.create({ 
      type: PortalCube, 
      x: 8, 
      y: 6,
      color: "Purple",
      tpX: 8,
      tpY: 4
    }).update();CubeCreator.create({ 
      type: WinningCube, 
      x: 6, 
      y: 0,
      color: "Purple",
      tpX: 8,
      tpY: 4
    }).update();
  },
  () => {
    Scenes.winningScene();
  },
];
