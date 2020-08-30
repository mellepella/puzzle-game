
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
                if(playerFutureY > playerCube.y - playerCube.velocityY) {
                    playerCube.x = this.tpX * unitSize;
                    playerCube.y = this.tpY * unitSize;
                }
                break;
            
            case 'left':
                if(playerCube.x + playerCube.size < this.x + this.size  
                    && playerCube.x + playerCube.size + playerCube.velocityX > this.size
                    && playerCube.velocityX === playerVelocity) {
                        playerCube.x = this.tpX * unitSize;
                        playerCube.y = this.tpY * unitSize;
                }
                break;

            case 'right':
                if(playerFutureX < this.x + this.size
                    && playerCube.x > this.x 
                    && playerCube.velocityX === -playerVelocity) {
                        playerCube.x = this.tpX * unitSize;
                        playerCube.y = this.tpY * unitSize;
                }
                break;
            }
    }
}