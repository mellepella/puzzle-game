class CubeCreator {
	static create(type, x, y, tpX, tpY, color) {
		return new type(x * unitSize, y * unitSize, color, tpX, tpY);
	}
}
