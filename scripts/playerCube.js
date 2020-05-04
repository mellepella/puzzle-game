
class PlayerCube extends Cube {
	constructor(x, y, color) {
		super(x, y, 'orange');

		this.startX = this.x;
		this.startY = this.y;
	
		this.velocityX = 0;
		this.velocityY = 0;

		this.isMoving = false;
	
		this.isColliding = false;
		
		this.moveDirection;
	}
	update() {
		super.update()
		this.move();
	}
	move() {
		this.x += this.velocityX;
		this.y += this.velocityY;
		
		if(this.x >= canvasWidth - this.size || this.x <= 0 || this.y >= canvasHeight - this.size || this.y <= 0) {
			Game.restart();
			this.isColliding = false;
		}
	}
	stop(x, y) {
		this.x = x;
		this.y = y;

		this.velocityX = 0;
		this.velocityY = 0;
				
		this.isColliding = true;

		this.isMoving = false;
	}
	go(direction) {
		if(this.isMoving) {
			return;
		}
		else {
			if(direction === 'up') {
				this.velocityY = -playerVelocity;
				this.isMoving = true;
				this.moveDirection = 'up';
			}
			else if(direction === 'down') {
				this.velocityY = playerVelocity;
				this.isMoving = true;
				this.moveDirection = 'down';
			}
			else if(direction === 'left') {
				this.velocityX = -playerVelocity;
				this.isMoving = true;
				this.moveDirection = 'left';
			}
			else if(direction === 'right') {
				this.velocityX = playerVelocity;
				this.isMoving = true;
				this.moveDirection = 'right';
			}
		}	
	}
}