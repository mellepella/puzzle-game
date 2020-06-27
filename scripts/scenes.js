class Scenes {
    static one() {	
		CubeCreator.create(WinningCube, unitSize * 6, unitSize * 4).update();
	}

	static two() {
		CubeCreator.create(WinningCube, unitSize * 4, unitSize * 3).update();

		CubeCreator.create(ObstacleCube, unitSize * 7, unitSize * 2).update(); 
		CubeCreator.create(ObstacleCube, unitSize * 13, unitSize * 4).update();
		CubeCreator.create(ObstacleCube, unitSize * 6, unitSize * 6).update();
		CubeCreator.create(ObstacleCube, unitSize * 12, unitSize * 7).update();
	}

	static three() {
		CubeCreator.create(WinningCube, unitSize * 12, unitSize * 7).update();

		CubeCreator.create(ObstacleCube, unitSize * 9, unitSize * 2).update();

		CubeCreator.create(ObstacleCube, unitSize * 6, unitSize * 4).update();
		CubeCreator.create(ObstacleCube, unitSize * 12, unitSize * 4).update();

		CubeCreator.create(ObstacleCube, unitSize * 13, unitSize * 5).update();

		CubeCreator.create(ObstacleCube, unitSize * 5, unitSize * 6).update();

		CubeCreator.create(ObstacleCube, unitSize * 11, unitSize * 7).update();

	}

	static four() {
		CubeCreator.create(WinningCube, unitSize * 6, unitSize * 2).update();

		CubeCreator.create(ObstacleCube, unitSize * 13, unitSize * 1).update();

		CubeCreator.create(ObstacleCube, unitSize * 9, unitSize * 2).update();

		CubeCreator.create(ObstacleCube, unitSize * 12, unitSize * 4).update();
		CubeCreator.create(ObstacleCube, unitSize * 8, unitSize * 4).update();

		CubeCreator.create(ObstacleCube, unitSize * 14, unitSize * 5).update();

		CubeCreator.create(ObstacleCube, unitSize * 7, unitSize * 6).update();

		CubeCreator.create(ObstacleCube, unitSize * 11, unitSize * 7).update();
		CubeCreator.create(ObstacleCube, unitSize * 5, unitSize * 7).update();

		CubeCreator.create(ObstacleCube, unitSize * 10, unitSize * 8).update();
	}
	
    static winningScene() {
		if (gameIsRunning) {
			const elapsedSeconds = Game.calculateTime()[0];
			const elapsedMinutes = Game.calculateTime()[1];

			const winningMessage = `You finished in ${elapsedSeconds} seconds and ${elapsedMinutes} minutes.`;

			Game.clearCanvas();

			UserInterface.displayText(unitSize * 2, unitSize * 4, "40px",  winningMessage);
			UserInterface.displayText(unitSize * 7, unitSize * 5, "30px", "(Press f5 to restart)");	
			
            gameIsRunning = false;
            
            console.log('You won!');
        }
	}
	 
}