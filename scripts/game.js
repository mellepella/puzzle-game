// Time-trackers

const startTime = new Date();

const oneSecond = 1000;

// Variables used all around

const keyCodes = {
	'w': 119,
	'a': 97,
	's': 115,
	'd': 100,
	'r': 114
}

const canvasWidth = 1000;
const canvasHeight = 500;

let currentScene = 1;

const font = "Arial";

let gameIsRunning = true;

const playerVelocity = 5;

const updateTime = 5;

const unitSize = 50;

let startingX = unitSize * 9;
let startingY = unitSize * 4;


// Cubes

const playerCube = new PlayerCube(startingX, startingY);

class Game {
	static calculateTime() {
		const endTime = new Date();

		const elapsedMilliseconds = endTime.getTime() - startTime.getTime();

		let elapsedSeconds = Math.round(elapsedMilliseconds/oneSecond);

		const elapsedMinutes = Math.floor(elapsedSeconds/60);

		elapsedSeconds = elapsedSeconds - elapsedMinutes * 60;

		return [elapsedSeconds, elapsedMinutes];
	}

	static clearCanvas() {
		ctx.fillStyle = "#f0f0f0";
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
	}

	static detectKeyPress(event) {
		switch(event.charCode) {
			case keyCodes.w:
				playerCube.go('up');
				break;
			
			case keyCodes.s:
				playerCube.go('down');
				break;

			case keyCodes.a:
				playerCube.go('left');
				break;
			
			case keyCodes.d:
				playerCube.go('right');
				break;
			
			case keyCodes.r:
				this.restart();
				break;
		}
	}

	static restart() {
		playerCube.stop(startingX, startingY);
		playerCube.isColliding = false;
	}

	static update() {
		if(gameIsRunning) {
			Game.clearCanvas();
			playerCube.update();
			UserInterface.displayText( {x: 18, y: 1, size: "25px", content: `${this.calculateTime()[1]} : ${this.calculateTime()[0]}`} );
		}

		scenes[currentScene - 1].forEach(element => element());
	}

}

// Animate

setInterval(function() {
	Game.update();
}, updateTime);