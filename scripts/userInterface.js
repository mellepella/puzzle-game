class UserInterface {
    static displayText(assets) {
		ctx.fillStyle = '#f5f5f5';
		ctx.font = `${assets.size} ${FONT}`;
		ctx.fillText(assets.content, assets.x * UNIT_SIZE, assets.y * UNIT_SIZE);
	}
}