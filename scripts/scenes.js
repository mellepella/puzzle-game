class Scenes {
    static one() {
		Game.clearCanvas();
		playerCube.update();
		CubeCreator.createWinningCube(unitSize * 6, unitSize * 4).update();
	}
	static two() {
		Game.clearCanvas();
		playerCube.update();

		CubeCreator.createWinningCube(unitSize * 4, unitSize * 3).update();

		CubeCreator.createObstacle(unitSize * 7, unitSize * 2).update(); 
		CubeCreator.createObstacle(unitSize * 13, unitSize * 4).update();
		CubeCreator.createObstacle(unitSize * 6, unitSize * 6).update();
		CubeCreator.createObstacle(unitSize * 12, unitSize * 7).update();
	}
	static three() {
		Game.clearCanvas();
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
		Game.clearCanvas();
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
    static winningScene() {
		if (gameIsRunning) {
			Game.clearCanvas();

			const elapsedSeconds = Game.calculateTime()[0];
			const elapsedMinutes = Game.calculateTime()[1];

			const winningMessage = `You finished in ${elapsedSeconds} seconds and ${elapsedMinutes} minutes.`;

			UserInterface.displayText(unitSize * 2, unitSize * 4, "40px",  winningMessage);
			UserInterface.displayText(unitSize * 7, unitSize * 5, "30px", "(Press f5 to restart)");	
			
            gameIsRunning = false;
            
            console.log('You won!');
        }
    } 
}