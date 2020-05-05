class WinningCube extends Cube{
	constructor(x, y, color) {
		super(x, y, '#f7ff63');
	}
	onCollision() {
			currentScene += 1;
			Game.restart();
	}
}