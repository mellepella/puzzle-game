class WinningCube extends Cube {
  constructor(x, y, texture) {
    super(x, y, textures.winningCube);
  }

  onCollision() {
    currentScene += 1;
    Game.restart();
  }
}
