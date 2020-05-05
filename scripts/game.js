// Time-trackers

const startTime = new Date();

const oneSecond = 1000;

// Variables used all around

const canvasWidth = 1000;
const canvasHeight = 500;

let currentScene = 1;

const font = "Arial";

let gameIsRunning = true;

const keyCodes = {
	'w': 119,
	'a': 97,
	's': 115,
	'd': 100,
	'r': 114
}

const playerVelocity = 5;

const updateTime = 10;

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
		scenes[currentScene - 1]();
	}

	// Scene-system

	static one() {
		this.clearCanvas();
		playerCube.update();
		CubeCreator.createWinningCube(unitSize * 6, unitSize * 4).update();
	}
	static two() {
		this.clearCanvas();
		playerCube.update();

		CubeCreator.createWinningCube(unitSize * 4, unitSize * 3).update();

		CubeCreator.createObstacle(unitSize * 7, unitSize * 2).update(); 
		CubeCreator.createObstacle(unitSize * 13, unitSize * 4).update();
		CubeCreator.createObstacle(unitSize * 6, unitSize * 6).update();
		CubeCreator.createObstacle(unitSize * 12, unitSize * 7).update();
	}
	static three() {
		this.clearCanvas();
		playerCube.update();
		CubeCreator.createWinningCube(unitSize * 12, unitSize * 7).update();

		CubeCreator.createObstacle(unitSize * 9, unitSize * 2).update();

		CubeCreator.createObstacle(unitSize * 6, unitSize * 4).update();
		CubeCreator.createObstacle(unitSize * 12, unitSize * 4).update();

		CubeCreator.createObstacle(unitSize * 13, unitSize * 5).update();

		CubeCreator.createObstacle(unitSize * 5, unitSize * 6).update();

		CubeCreator.createObstacle(unitSize * 11, unitSize * 7).update();

	}
	static four() {
		this.clearCanvas();
		playerCube.update();
		CubeCreator.createWinningCube(unitSize * 6, unitSize * 2).update();

		CubeCreator.createObstacle(unitSize * 13, unitSize * 1).update();

		CubeCreator.createObstacle(unitSize * 9, unitSize * 2).update();

		CubeCreator.createObstacle(unitSize * 12, unitSize * 4).update();
		CubeCreator.createObstacle(unitSize * 8, unitSize * 4).update();

		CubeCreator.createObstacle(unitSize * 14, unitSize * 5).update();

		CubeCreator.createObstacle(unitSize * 7, unitSize * 6).update();

		CubeCreator.createObstacle(unitSize * 11, unitSize * 7).update();
		CubeCreator.createObstacle(unitSize * 5, unitSize * 7).update();

		CubeCreator.createObstacle(unitSize * 10, unitSize * 8).update();
	}
	static update() {
		scenes[currentScene - 1]();
		
		if(gameIsRunning) {
			UserInterface.displayText(unitSize * 9, unitSize * 1, "40px", `${this.calculateTime()[1]} : ${this.calculateTime()[0]}`);
		}

	}
	static winningScene() {
		if (gameIsRunning) {
			this.clearCanvas();

			const elapsedSeconds = this.calculateTime()[0];
			const elapsedMinutes = this.calculateTime()[1];

			const winningMessage = `You finished in ${elapsedSeconds} seconds and ${elapsedMinutes} minutes.`;

			UserInterface.displayText(unitSize * 2, unitSize * 4, "40px",  winningMessage);
			UserInterface.displayText(unitSize * 7, unitSize * 5, "30px", "(Press f5 to restart)");	
			
			gameIsRunning = false;
		}
	}
}

const scenes = [
	function() { Game.one() },
	function() { Game.two() },
	function() { Game.three() },
	function() { Game.four() },
	function() { Game.winningScene() }
]

// Animate

setInterval(function() {
	Game.update();
}, updateTime);