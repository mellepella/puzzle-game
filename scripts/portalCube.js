
class PortalCube extends Cube {
    constructor(x, y, color, tpX, tpY) {
        super(x, y, color, tpX, tpY);
        this.tpX = tpX;
        this.tpY = tpY;
    }
    
    onCollision(collisionSide) {
        if(collisionSide === 'bottom') {
            let playerFutureY = playerCube.y + playerCube.velocityY;
			if(playerFutureY < playerCube.y) {
                playerCube.x = this.tpX * unitSize;
                playerCube.y = this.tpY * unitSize;
            }
            else {
                return;
            }
        }
        else if(collisionSide === 'top') {
            let playerFutureY = playerCube.y + playerCube.velocityY;
            if(playerFutureY > playerCube.y - playerCube.velocityY) {
                playerCube.x = this.tpX * unitSize;
                playerCube.y = this.tpY * unitSize;
            }
            else {
                return;
            }
        }
        else if(collisionSide === 'left') {
            if(playerCube.x + playerCube.size < this.x + this.size  
            && playerCube.x + playerCube.size + playerCube.velocityX > this.size
            && playerCube.velocityX === playerVelocity) {
                playerCube.x = this.tpX * unitSize;
                playerCube.y = this.tpY * unitSize;
            }
            else {
                return;
            }
        }
        else if(collisionSide === 'right') {
            let playerFutureX = playerCube.x + playerCube.velocityX;
            if(playerFutureX < this.x + this.size
            && playerCube.x > this.x 
            && playerCube.velocityX === -playerVelocity) {
                playerCube.x = this.tpX * unitSize;
                playerCube.y = this.tpY * unitSize;
            }
            else {
                return;
            } 
        }
    }
}