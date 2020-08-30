class CubeCreator {
	static create(type, x, y, tpX, tpY, color) {
		if(type == 'PortalCube') {
					return new type(x * unitSize, y * unitSize, 'blue', tpX, tpY);
		}
		return new type(x * unitSize, y * unitSize, 'blue', tpX, tpY);
	}
}
