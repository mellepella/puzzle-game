class CubeCreator {
	static create(type, x, y) {
		return new type(x * unitSize, y * unitSize);
	}
}
