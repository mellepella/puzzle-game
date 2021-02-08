class WinningCube extends Cube {
  constructor(x, y, name) {
    super(x, y, AssetStore.getTexture("winningCube"));
  }

  onCollision() {
    currentScene += 1;
    Game.restart();
  }
}
