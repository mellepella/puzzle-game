class CubeCreator {
  static create(props) {
    return new props.type(props.x*UNIT_SIZE, props.y*UNIT_SIZE, props.color, props.tpX, props.tpY);
  }
}
