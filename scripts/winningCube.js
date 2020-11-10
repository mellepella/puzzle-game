class WinningCube extends Cube {
  constructor(x, y, color) {
    super(x, y, "winningCube");
  }

  onCollision() {
    currentScene += 1;
    Game.restart();
  }
}
