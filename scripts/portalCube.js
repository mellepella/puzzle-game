
class PortalCube extends Cube {
    constructor(x, y, color, tpX, tpY) {
        super(x, y, color, tpX, tpY);
        this.tpX = tpX;
        this.tpY = tpY;
    }
    
    onCollision(collisionSide) {

        let playerFutureY = playerCube.y + playerCube.velocityY;
        let playerFutureX = playerCube.x + playerCube.velocityX;

        switch(collisionSide) {
            case 'bottom':
                if(playerFutureY < playerCube.y) {
                    playerCube.x = this.tpX * unitSize;
                    playerCube.y = this.tpY * unitSize;
                }
                break;
            
            case 'top':
                if(playerFutureY > playerCube.y) {
                    playerCube.x = this.tpX * unitSize;
                    playerCube.y = this.tpY * unitSize;
                }
                break;
            
            case 'left':
                if(playerFutureX > playerCube.x && playerFutureX <= this.x) {
                        playerCube.x = this.tpX * unitSize;
                        playerCube.y = this.tpY * unitSize;
                }
                break;

            case 'right':
                if(playerFutureX < playerCube.x && playerFutureX <= this.x) {
                        playerCube.x = this.tpX * unitSize;
                        playerCube.y = this.tpY * unitSize;
                }
                break;
        }
    }
}