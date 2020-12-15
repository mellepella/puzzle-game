let sandboxLevel = "";
let sandboxObject = ObstacleCube;
let sandboxTpX = 3;
let sandboxTpY = 3;
let sandboxPortalColor = "Blue";

class Sandbox {
  static update() {
    UserInterface.displayText({
      content: `x: ${Math.floor(mouseX / UNIT_SIZE)}, y:${Math.floor(
        mouseY / UNIT_SIZE
      )}`,
      x: 1,
      y: 2,
    });
    this.drawMarking(mouseX, mouseY);
  }
  static pushLevel() {
    scenes.splice(scenes.length - 1, 1, () => {
      eval(sandboxLevel);
    });
  }

  static updateTp(id) {
    const inputElem = document.getElementById(id);
    const content = inputElem.value;
    console.log(id, sandboxTpX);

    if(id === "tpx") {
      sandboxTpX = eval(content);
    }
    else if(id === "tpy") {
      sandboxTpY = eval(content);
    }
  }

  static updatePortalColor() {
    const inputElem = document.getElementById("portal-color-input");
    sandboxPortalColor = inputElem.value;
  }

  static addObject(props) {
    sandboxLevel += `CubeCreator.create({ 
      type: ${props.type.name}, 
      x: ${props.x}, 
      y: ${props.y},
      color: "${sandboxPortalColor}",
      tpX: ${sandboxTpX},
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

  static createUtils() {
    UserInterface.createButton("Obstacle", "sandboxObject = ObstacleCube");
    UserInterface.createButton("Portal", "sandboxObject = PortalCube");
    UserInterface.createButton("WinningCube", "sandboxObject = WinningCube");
    UserInterface.createInput({
      placeholder: "Portal color",
      id: "portal-color-input",
      content: "Blue",
      onchange: "Sandbox.updatePortalColor();",
      type: "text",
    });
    UserInterface.createInput({
      placeholder: "Tp X",
      id: "tpx",
      onchange: 'Sandbox.updateTp("tpx");',
      type: "number",
    });
    UserInterface.createInput({
      placeholder: "Tp Y",
      id: "tpy",
      onchange: 'Sandbox.updateTp("tpy");',
      type: "number",
    })
  }
}
