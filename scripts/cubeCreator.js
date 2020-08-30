class CubeCreator {
	static create(type, x, y, tpX, tpY, color) {
		return new type(x * UNIT_SIZE, y * UNIT_SIZE, color, tpX, tpY);
	}
}
