class ObstacleCube extends Cube {
  constructor(x, y, color) {
    super(x, y, "obstacleCube");
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
