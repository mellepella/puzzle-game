class CubeCreator {
  static create(props) {
    if(props.direction !== undefined) {
      return new props.type(props.x*UNIT_SIZE, props.y*UNIT_SIZE, props.color, props.direction);
    } else {
      return new props.type(props.x*UNIT_SIZE, props.y*UNIT_SIZE, props.color, props.tpX, props.tpY);
    }
  }
}
