class Scenes {
    static one() {	
		CubeCreator.create(WinningCube, 6, 4).update();
	}

	static two() {
		CubeCreator.create(WinningCube, 4, 3).update();

		CubeCreator.create(ObstacleCube, 7, 2).update(); 
		CubeCreator.create(ObstacleCube, 13, 4).update();
		CubeCreator.create(ObstacleCube, 6, 6).update();
		CubeCreator.create(ObstacleCube, 12, 7).update();
	}

	static three() {
		CubeCreator.create(WinningCube, 12, 7).update();

		CubeCreator.create(ObstacleCube, 9, 2).update();

		CubeCreator.create(ObstacleCube, 6, 4).update();
		CubeCreator.create(ObstacleCube, 12, 4).update();

		CubeCreator.create(ObstacleCube, 13, 5).update();

		CubeCreator.create(ObstacleCube, 5, 6).update();

		CubeCreator.create(ObstacleCube, 11, 7).update();

	}

	static four() {
		CubeCreator.create(WinningCube, 6, 2).update();

		CubeCreator.create(ObstacleCube, 13, 1).update();

		CubeCreator.create(ObstacleCube, 9, 2).update();

		CubeCreator.create(ObstacleCube, 12, 4).update();
		CubeCreator.create(ObstacleCube, 8, 4).update();

		CubeCreator.create(ObstacleCube, 14, 5).update();

		CubeCreator.create(ObstacleCube, 7, 6).update();

		CubeCreator.create(ObstacleCube, 11, 7).update();
		CubeCreator.create(ObstacleCube, 5, 7).update();

		CubeCreator.create(ObstacleCube, 10, 8).update();
	}
	
    static winningScene() {
		if (gameIsRunning) {
			const elapsedSeconds = Game.calculateTime()[0];
			const elapsedMinutes = Game.calculateTime()[1];

			const winningMessage = `You finished in ${elapsedSeconds} seconds and ${elapsedMinutes} minutes.`;

			Game.clearCanvas();

			UserInterface.displayText(2, 4, "40px",  winningMessage);
			UserInterface.displayText(7, 5, "30px", "(Press f5 to restart)");	
			
            gameIsRunning = false;
            
            console.log('You won!');
        }
	}
	 
}