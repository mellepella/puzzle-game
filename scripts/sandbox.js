let sandboxLevel = "";
let sandboxObject = PortalCube;
let sanboxTpX = 3;
let sandboxTpY = 3;
let sandboxPortalColor = "Blue"

class Sandbox {
  static update() {
    this.drawMarking(mouseX, mouseY);
  }
  static pushLevel() {
    scenes.splice(scenes.length - 1, 1, () => {
      eval(sandboxLevel);
    });
  }

  static addObject(props) {
    sandboxLevel += `CubeCreator.create({ 
      type: ${props.type.name}, 
      x: ${props.x}, 
      y: ${props.y},
      color: "${sandboxPortalColor}",
      tpX: ${sanboxTpX},
      tpY: ${sandboxTpY}
    }).update();`;
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
