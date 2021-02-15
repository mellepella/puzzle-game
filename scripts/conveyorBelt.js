class ConveyorBelt extends Cube {
  constructor(x, y, name, direction) {
    super(x, y, AssetStore.getTexture(`conveyorBelt${direction}`));
    this.direction = direction;
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
    PLAYER_CUBE.go(KEYS[this.direction.toLowerCase()]);
  }
}
