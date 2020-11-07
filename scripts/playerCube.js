
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
		
		if(this.x >= CANVAS_WIDTH - this.size || this.x <= 0 || this.y >= CANVAS_HEIGHT - this.size || this.y <= 0) {
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

	go(key) {
		if(this.isMoving) {
			return;
		}
		else {
			switch(key) {
				case KEYS.up:
					this.velocityY = -PLAYER_VELOCITY;
					this.isMoving = true;
					this.moveDirection = 'up';
					break;

				case KEYS.down:
					this.velocityY = PLAYER_VELOCITY;
					this.isMoving = true;
					this.moveDirection = 'down';
					break;
				
				case KEYS.left:
					this.velocityX = -PLAYER_VELOCITY;
					this.isMoving = true;
					this.moveDirection = 'left';
					break;
					
				case KEYS.right:
					this.velocityX = PLAYER_VELOCITY;
					this.isMoving = true;
					this.moveDirection = 'right';
					break;
			}
		}	
	}
	
}