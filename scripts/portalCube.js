
class PortalCube extends Cube {
    constructor(x, y, color, tpX, tpY) {
        super(x, y, color, tpX, tpY);
        this.tpX = tpX;
        this.tpY = tpY;
    }
    
    onCollision(collisionSide) {

        let playerFutureY = PLAYER_CUBE.y + PLAYER_CUBE.velocityY;
        let playerFutureX = PLAYER_CUBE.x + PLAYER_CUBE.velocityX;

        switch(collisionSide) {
            case 'bottom':
                if(playerFutureY < PLAYER_CUBE.y) {
                    PLAYER_CUBE.x = this.tpX * UNIT_SIZE;
                    PLAYER_CUBE.y = this.tpY * UNIT_SIZE;
                }
                break;
            
            case 'top':
                if(playerFutureY > PLAYER_CUBE.y) {
                    PLAYER_CUBE.x = this.tpX * UNIT_SIZE;
                    PLAYER_CUBE.y = this.tpY * UNIT_SIZE;
                }
                break;
            
            case 'left':
                if(playerFutureX > PLAYER_CUBE.x && playerFutureX <= this.x) {
                        PLAYER_CUBE.x = this.tpX * UNIT_SIZE;
                        PLAYER_CUBE.y = this.tpY * UNIT_SIZE;
                }
                break;

            case 'right':
                if(playerFutureX < PLAYER_CUBE.x && playerFutureX >= this.x) {
                        PLAYER_CUBE.x = this.tpX * UNIT_SIZE;
                        PLAYER_CUBE.y = this.tpY * UNIT_SIZE;
                }
                break;
        }
    }
}