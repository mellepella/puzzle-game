const sandbox = {
  history: [],
  level: "",
  object: ObstacleCube,
  tpX: 0,
  tpY: 0,
  portalColor: "Blue",
};

class Sandbox {
  static update() {
    UserInterface.displayText({
      content: `x: ${Math.floor(mouseX / UNIT_SIZE)}, y: ${Math.floor(
        mouseY / UNIT_SIZE
      )}`,
      x: 1,
      y: 2,
    });
    this.drawMarking(mouseX, mouseY);
  }

  static undo() {
    const history = sandbox.history;

    history.splice(history.length - 1, 1);
  }

  static pushLevel() {
    const history = sandbox.history;

    scenes.splice(scenes.length - 1, 1, () => {
      sandbox.level = history[history.length - 1] || "";
      eval(sandbox.level);
    });
  }

  static updateTp(id) {
    const inputElem = document.getElementById(id);
    const content = inputElem.value;

    sandbox[id] = eval(content);
  }

  static updatePortalColor() {
    const inputElem = document.getElementById("portal-color-input");
    sandbox.portalColor = inputElem.value;
  }

  static addObject(props) {
    sandbox.history.push(
      sandbox.level +
        `CubeCreator.create({ 
      type: ${props.type.name}, 
      x: ${props.x}, 
      y: ${props.y},
      color: "${sandbox.portalColor}",
      tpX: ${sandbox.tpX},
      tpY: ${sandbox.tpY}
    }).update();`
    );
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
    UserInterface.createButton("Obstacle", "sandbox.object = ObstacleCube");
    UserInterface.createButton("Portal", "sandbox.object = PortalCube");
    UserInterface.createButton("WinningCube", "sandbox.object = WinningCube");

    UserInterface.createInput({
      placeholder: "Portal color",
      id: "portal-color-input",
      content: "Blue",
      onchange: "Sandbox.updatePortalColor();",
      type: "text",
    });
    UserInterface.createInput({
      placeholder: "Tp X",
      id: "tpX",
      onchange: 'Sandbox.updateTp("tpX");',
      type: "number",
    });
    UserInterface.createInput({
      placeholder: "Tp Y",
      id: "tpY",
      onchange: 'Sandbox.updateTp("tpY");',
      type: "number",
    });

    UserInterface.createButton("Undo", "Sandbox.undo()");
  }
}
