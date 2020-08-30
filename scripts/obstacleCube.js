class ObstacleCube extends Cube {
	constructor(x, y, color) {
		super(x, y, 'black');
	}

	onCollision(collisionSide) {
		if(collisionSide === 'bottom') {
			playerCube.stop(playerCube.x, playerCube.y - playerCube.velocityY);
		}
		else if(collisionSide === 'top') {
			playerCube.stop(playerCube.x, playerCube.y - playerCube.velocityY);
		}
		else if(collisionSide === 'left' || collisionSide === 'right') {
			playerCube.stop(playerCube.x - playerCube.velocityX, playerCube.y);
		}
	}
	
}