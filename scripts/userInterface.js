class UserInterface {
    static displayText(assets) {
		ctx.fillStyle = 'black';
		ctx.font = `${assets.size} ${FONT}`;
		ctx.fillText(assets.content, assets.x * UNIT_SIZE, assets.y * UNIT_SIZE);
	}
}