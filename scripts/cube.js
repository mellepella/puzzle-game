class Cube {
    constructor(x, y, color) {
        this.x = x;
		this.y = y;
	
        this.size = unitSize;
        
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

		if(this.y === playerCube.y 
		&& this.x + this.size > playerCube.x
		&& this.x < playerCube.x + playerCube.size
		&& playerCube.x < playerCube.x + playerCube.velocityX) {
			this.onCollision('left');
		}
		
		// Detect collision from right

		else if(this.y === playerCube.y 
			&& this.x + this.size > playerCube.x
			&& this.x < playerCube.x + playerCube.size
			&& playerCube.x > playerCube.x + playerCube.velocityX) {
			this.onCollision('right');
		} 

		// Detect upper collision

		else if(this.x === playerCube.x 
		&& this.y < playerCube.y + playerCube.size 
		&& this.y + this.size > playerCube.y + playerCube.size) {
            this.onCollision('top');
		}

		// Detect collision from the bottom
	
		else if(this.x === playerCube.x 
		&& this.y < playerCube.y 
		&& this.y + this.size > playerCube.y) {
			this.onCollision('bottom');
		}
	}
	
    onCollision(collisionSide) {
	}
	
}