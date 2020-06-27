class Scenes {
    static one() {
		UserInterface.displayText(4, 1, '25px', tutorialText[0]);
		UserInterface.displayText(7, 2, '15px', tutorialText[1]);
		
		CubeCreator.create(WinningCube, 6, 4).update();
	}

	static two() {
		UserInterface.displayText(3, 1, '25px', tutorialText[2]);

		CubeCreator.create(WinningCube, 4, 3).update();

		CubeCreator.create(ObstacleCube, 7, 2).update(); 
		CubeCreator.create(ObstacleCube, 13, 4).update();
		CubeCreator.create(ObstacleCube, 6, 6).update();
		CubeCreator.create(ObstacleCube, 12, 7).update();
	}

	static three() {
		UserInterface.displayText(2, 1, '25px', tutorialText[3]);

		CubeCreator.create(WinningCube, 12, 7).update();

		CubeCreator.create(ObstacleCube, 9, 2).update();

		CubeCreator.create(ObstacleCube, 6, 4).update();
		CubeCreator.create(ObstacleCube, 12, 4).update();

		CubeCreator.create(ObstacleCube, 13, 5).update();

		CubeCreator.create(ObstacleCube, 5, 6).update();

		CubeCreator.create(ObstacleCube, 11, 7).update();

	}

	static four() {
		UserInterface.displayText(0.5, 1, '25px', tutorialText[4]);
		UserInterface.displayText(0.5, 1.5, '15px', tutorialText[5]);

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
        }
	}
	 
}