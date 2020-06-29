class Scenes {
	static winningScene() {
		if (gameIsRunning) {
			const elapsedSeconds = Game.calculateTime()[0];
			const elapsedMinutes = Game.calculateTime()[1];

			const winningMessage = `You finished in ${elapsedSeconds} seconds and ${elapsedMinutes} minutes.`;

			Game.clearCanvas();

			UserInterface.displayText( {x: 4, y: 4, size: "60px",  content: winningMessage} );
			UserInterface.displayText( {x: 8, y: 5, size: "40px", content: "(Press f5 to restart)"} );	
			
            gameIsRunning = false;
        }
	}
	 
}

const scenes = [
	[
		function() { UserInterface.displayText( {x: 5, y: 1, size: '40px', content: 'Get to the yellow Cube to proceed to the next level!'} ) },
		function() { UserInterface.displayText( {x: 7, y: 2, size: '30px', content: '(Use the W, A, S, D keys to move around)'} ) },

		function() { CubeCreator.create(WinningCube, 6, 4).update() }
	],
	[
		function() { UserInterface.displayText( {x: 4, y: 1, size: '40px', content: 'Use the obstacles to stop and change the direction you\'re going!'} ) },

		function() { CubeCreator.create(WinningCube, 4, 3).update() },
		function() { CubeCreator.create(ObstacleCube, 7, 2).update() },
		function() { CubeCreator.create(ObstacleCube, 13, 4).update() },
		function() { CubeCreator.create(ObstacleCube, 6, 6).update() },
		function() { CubeCreator.create(ObstacleCube, 12, 7).update() }
	],
	[
		function() { UserInterface.displayText( {x: 3.5, y: 1, size: '40px', content: 'If you get stuck, press the R key to restart from the start of the level.'} ) },

		function() { CubeCreator.create(WinningCube, 12, 7).update() },
		function() { CubeCreator.create(ObstacleCube, 9, 2).update() },
		function() { CubeCreator.create(ObstacleCube, 6, 4).update() },
		function() { CubeCreator.create(ObstacleCube, 12, 4).update() },
		function() { CubeCreator.create(ObstacleCube, 13, 5).update() },
		function() { CubeCreator.create(ObstacleCube, 5, 6).update() },
		function() { CubeCreator.create(ObstacleCube, 11, 7).update() }
	],
	[
		function() { UserInterface.displayText( {x: 0.5, y: 1, size: '40px', content: 'Try to finish the levels as fast as you can!'} ) },
		function() { UserInterface.displayText( {x: 0.5, y: 1.5, size: '25px', content: 'Your time will be displayed in the right upper corner. Good luck!'} ) },

		function() { CubeCreator.create(WinningCube, 6, 2).update() },
		function() { CubeCreator.create(ObstacleCube, 13, 1).update() },
		function() { CubeCreator.create(ObstacleCube, 9, 2).update() },
		function() { CubeCreator.create(ObstacleCube, 12, 4).update() },
		function() { CubeCreator.create(ObstacleCube, 8, 4).update() },
		function() { CubeCreator.create(ObstacleCube, 14, 5).update() },
		function() { CubeCreator.create(ObstacleCube, 7, 6).update() },
		function() { CubeCreator.create(ObstacleCube, 11, 7).update() },
		function() { CubeCreator.create(ObstacleCube, 5, 7).update() },
		function() { CubeCreator.create(ObstacleCube, 10, 8).update() }
	],
	[
		function() { Scenes.winningScene() }
	]
]