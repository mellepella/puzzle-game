class Cube {
    constructor(x, y, color) {
        this.x = x;
		this.y = y;
	
        this.size = UNIT_SIZE;
        
        this.color = color;
	}
	
    update() {
		this.draw();
		this.detectCollision();
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}

	detectCollision() {

		// Detect collision from left

		if(this.y === PLAYER_CUBE.y 
			&& this.x + this.size > PLAYER_CUBE.x
			&& this.x < PLAYER_CUBE.x + PLAYER_CUBE.size
			&& PLAYER_CUBE.x < PLAYER_CUBE.x + PLAYER_CUBE.velocityX) {
			this.onCollision('left');
		}
		
		// Detect collision from right

		else if(this.y === PLAYER_CUBE.y 
			&& this.x + this.size > PLAYER_CUBE.x
			&& this.x < PLAYER_CUBE.x + PLAYER_CUBE.size
			&& PLAYER_CUBE.x > PLAYER_CUBE.x + PLAYER_CUBE.velocityX) {
			this.onCollision('right');
		} 

		// Detect upper collision

		else if(this.x === PLAYER_CUBE.x 
			&& this.y < PLAYER_CUBE.y + PLAYER_CUBE.size 
			&& this.y + this.size > PLAYER_CUBE.y + PLAYER_CUBE.size) {
            this.onCollision('top');
		}

		// Detect collision from the bottom
	
		else if(this.x === PLAYER_CUBE.x 
			&& this.y < PLAYER_CUBE.y 
			&& this.y + this.size > PLAYER_CUBE.y) {
			this.onCollision('bottom');
		}
	}
	
    onCollision(collisionSide) {
	}
	
}