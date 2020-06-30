class UserInterface {
    static displayText(assets) {
		ctx.fillStyle = 'black';
		ctx.font = `${assets.size} ${font}`;
		ctx.fillText(assets.content, assets.x * unitSize, assets.y * unitSize);
	}
}