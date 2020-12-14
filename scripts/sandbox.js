let sandboxLevel = "";
let sandboxObject = ObstacleCube;

class Sandbox {
  static update() {
    this.drawMarking(mouseX, mouseY);
  }
  static pushLevel() {
    scenes.splice(scenes.length - 1, 1, () => {
      eval(sandboxLevel);
    });
  }
  static addObject(type, x, y) {
    sandboxLevel += `CubeCreator.create(${type.name}, ${x}, ${y}).update();`;
    this.pushLevel();
  }
  static drawMarking(x, y) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(
      Math.floor(x / UNIT_SIZE) * UNIT_SIZE,
      Math.floor(y / UNIT_SIZE) * UNIT_SIZE,
      UNIT_SIZE,
      UNIT_SIZE
    );
  }
}
