class CubeCreator {
	static create(type, x, y) {

		var creation = new type(x * unitSize, y * unitSize);

		return creation;
	}
}
