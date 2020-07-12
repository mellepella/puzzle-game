class Scenes {
	static winningScene() {
		if (gameIsRunning) {
			const elapsedSeconds = Game.calculateTime()[0];
			const elapsedMinutes = Game.calculateTime()[1];

			const winningMessage = `You finished in ${elapsedMinutes} minute(s) and ${elapsedSeconds} second(s).`;

			Game.clearCanvas();

			UserInterface.displayText( {x: 4, y: 4, size: "60px",  content: winningMessage} );
			UserInterface.displayText( {x: 8, y: 5, size: "40px", content: "(Press f5 to restart)"} );	
			
            gameIsRunning = false;
        }
	}
	 
}

const scenes = [
  	() => {
		CubeCreator.create(WinningCube, 6, 4).update();
		UserInterface.displayText( {x: 5, y: 1, size: '40px', content: 'Get to the yellow Cube to proceed to the next level!'} );
		UserInterface.displayText( {x: 6.5, y: 2, size: '30px', content: '(Use the W, A, S, D keys to move around)'} );
	},
	() => {
		UserInterface.displayText( {x: 4, y: 1, size: '40px', content: 'Use the obstacles to stop and change the direction you\'re going!'} );
		CubeCreator.create(WinningCube, 4, 3).update();
		CubeCreator.create(ObstacleCube, 7, 2).update();
		CubeCreator.create(ObstacleCube, 13, 4).update();
		CubeCreator.create(ObstacleCube, 6, 6).update();
		CubeCreator.create(ObstacleCube, 12, 7).update();
	},
	() => {
		UserInterface.displayText( {x: 3.5, y: 1, size: '40px', content: 'If you get stuck, press the R key to restart from the start of the level.'} );
		CubeCreator.create(WinningCube, 12, 7).update();
		CubeCreator.create(ObstacleCube, 9, 2).update();
		CubeCreator.create(ObstacleCube, 6, 4).update();
		CubeCreator.create(ObstacleCube, 12, 4).update();
		CubeCreator.create(ObstacleCube, 13, 5).update();
		CubeCreator.create(ObstacleCube, 5, 6).update();
		CubeCreator.create(ObstacleCube, 11, 7).update();
	},
	() => {
		UserInterface.displayText( {x: 0.5, y: 1, size: '40px', content: 'Try to finish the levels as fast as you can!'} );
		UserInterface.displayText( {x: 0.5, y: 1.5, size: '25px', content: 'Your time will be displayed in the right upper corner. Good luck!'} );
		CubeCreator.create(WinningCube, 9, 1).update();
		CubeCreator.create(ObstacleCube, 9, 2).update();
		CubeCreator.create(ObstacleCube, 9, 6).update();
		CubeCreator.create(ObstacleCube, 11, 4).update();
		CubeCreator.create(ObstacleCube, 10, 2).update();
		CubeCreator.create(ObstacleCube, 5, 3).update();
		CubeCreator.create(ObstacleCube, 6, 7).update();
		CubeCreator.create(ObstacleCube, 4, 5).update();
		CubeCreator.create(ObstacleCube, 8, 0).update();
	},
	() => {
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
	},
	() => {
		CubeCreator.create(WinningCube, 7, 7).update();
		CubeCreator.create(ObstacleCube, 9, 7).update();
		CubeCreator.create(ObstacleCube, 6, 5).update();
		CubeCreator.create(ObstacleCube, 11, 6).update();
		CubeCreator.create(ObstacleCube, 10, 1).update();
		CubeCreator.create(ObstacleCube, 8, 2).update();
		CubeCreator.create(ObstacleCube, 12, 2).update();
	},
	() => {
		CubeCreator.create(WinningCube, 8, 7).update();
		CubeCreator.create(ObstacleCube, 6, 4).update();
		CubeCreator.create(ObstacleCube, 7, 1).update();
		CubeCreator.create(ObstacleCube, 5, 2).update();
		CubeCreator.create(ObstacleCube, 11, 3).update();
		CubeCreator.create(ObstacleCube, 6, 5).update();
		CubeCreator.create(ObstacleCube, 10, 0).update();
		CubeCreator.create(ObstacleCube, 10, 6).update();
		CubeCreator.create(ObstacleCube, 11, 4).update();
	},
	() => {
		Scenes.winningScene();
	}
]
