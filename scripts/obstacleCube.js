class ObstacleCube extends Cube {
  constructor(x, y, name) {
    super(x, y, AssetStore.getTexture("obstacle"));
  }

  onCollision(collisionSide) {
    switch (collisionSide) {
      case "top":
      case "bottom":
        PLAYER_CUBE.stop(PLAYER_CUBE.x, PLAYER_CUBE.y - PLAYER_CUBE.velocityY);
        break;
      case "left":
      case "right":
        PLAYER_CUBE.stop(PLAYER_CUBE.x - PLAYER_CUBE.velocityX, PLAYER_CUBE.y);
        break;
    }
  }
}
