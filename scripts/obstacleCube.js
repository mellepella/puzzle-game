class ObstacleCube extends Cube {
  constructor(x, y, name) {
    super(x, y, AssetStore.getTexture("obstacle"));
  }

  onCollision(collisionSide) {
    if (collisionSide === "bottom") {
      PLAYER_CUBE.stop(PLAYER_CUBE.x, PLAYER_CUBE.y - PLAYER_CUBE.velocityY);
    } else if (collisionSide === "top") {
      PLAYER_CUBE.stop(PLAYER_CUBE.x, PLAYER_CUBE.y - PLAYER_CUBE.velocityY);
    } else if (collisionSide === "left" || collisionSide === "right") {
      PLAYER_CUBE.stop(PLAYER_CUBE.x - PLAYER_CUBE.velocityX, PLAYER_CUBE.y);
    }
  }
}
