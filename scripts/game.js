// Time-trackers

let seconds = 0;
let minutes = 0;

// Variables used all around

const canvasWidth = 1000;
const canvasHeight = 500;

let currentScene = 1;

const font = "Arial";

let gameIsRunning = true;

const oneSecond = 1000;

const playerVelocity = 5;

const updateTime = 10;

const unitSize = 50;

let startingX = unitSize * 9;
let startingY = unitSize * 4;

let winningMessage = `You finished in ${seconds} seconds and ${minutes} minutes`;

// Cubes

const playerCube = new PlayerCube(startingX, startingY);

class Game {
	static clearCanvas() {
		ctx.fillStyle = "#f0f0f0";
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
	}
	static count() {
		seconds += 1;
		if(seconds === 60) {
			seconds = 0;
			minutes += 1;
			if(minutes === 60) {
				minutes = 0;
				hours += 1;
			}
		}
	}
	static detectKeyPress(event) {
		if(event.charCode == 119) {
			playerCube.goUp();
		}
		else if(event.charCode == 115) {
			playerCube.goDown();
		}
		else if(event.charCode == 97) {
			playerCube.goLeft();
		}
		else if(event.charCode == 100) {
			playerCube.goRight();
		}
	}
	static restart() {
		playerCube.stop(startingX, startingY);
		playerCube.isColliding = false;
	}

	// Scene-system

	static sceneOne() {
		this.clearCanvas();
		playerCube.update();
		CubeCreator.createWinningCube(unitSize * 6, unitSize * 4).update();
	}
	static sceneTwo() {

		this.clearCanvas();
		playerCube.update();
		CubeCreator.createWinningCube(unitSize * 4, unitSize * 3).update();

		CubeCreator.createObstacle(unitSize * 12, unitSize * 7).update();
		CubeCreator.createObstacle(unitSize * 6, unitSize * 6).update();
		CubeCreator.createObstacle(unitSize * 7, unitSize * 2).update();
		CubeCreator.createObstacle(unitSize * 13, unitSize * 4).update();
	}
	static update() {
		if(currentScene === 1) {
			this.sceneOne();
		}
		else if(currentScene === 2) {
			this.sceneTwo();
		}	
		else {
			winningMessage = `You finished in ${seconds} seconds and ${minutes} minutes`;

			this.clearCanvas();

			gameIsRunning = false;
			UserInterface.displayText(unitSize * 2, unitSize * 4, "40px",  winningMessage);
			UserInterface.displayText(unitSize * 7, unitSize * 5, "30px", "(Press f5 to restart)");		
		}
	}
}

// Animate

setInterval(function() {
	Game.update();
}, updateTime);

setInterval(function() {
	if(gameIsRunning) {
		Game.count();
	}
}, oneSecond);
