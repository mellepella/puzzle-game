const sandbox = {
  history: [],
  level: "",
  object: ObstacleCube,
  tpX: 0,
  tpY: 0,
  portalColor: "Blue",
  beltDirection: "Right",
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
    UserInterface.displayText({
      content: `Chosen object: ${sandbox.object.name}`,
      x: 3,
      y: 1,
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

  static updateBeltDirection() {
    const selectElem = document.getElementById("belt-direction");

    sandbox.beltDirection = selectElem.options[selectElem.selectedIndex].text;
  }

  static updateTp(id) {
    const inputElem = document.getElementById(id);
    const content = inputElem.value;

    sandbox[id] = eval(content);
  }

  static updatePortalColor() {
    const selectElem = document.getElementById("portal-color");

    sandbox.portalColor = selectElem.options[selectElem.selectedIndex].text;
  }

  static addObject(props) {
    let cube;
    switch (props.type.name) {
      case "PortalCube":
        cube =
          sandbox.level +
          `CubeCreator.create({ 
          type: ${props.type.name}, 
          x: ${props.x}, 
          y: ${props.y},
          color: "${sandbox.portalColor}",
          tpX: ${sandbox.tpX},
          tpY: ${sandbox.tpY}
        }).update();`;
        break;
      case "ConveyorBelt":
        cube =
          sandbox.level +
          `CubeCreator.create({ 
          type: ${props.type.name}, 
          x: ${props.x}, 
          y: ${props.y},
          direction: "${sandbox.beltDirection}",
        }).update();`;
        break;
      default:
        cube =
          sandbox.level +
          `CubeCreator.create({ 
          type: ${props.type.name}, 
          x: ${props.x}, 
          y: ${props.y}
        }).update();`;
    }

    sandbox.history.push(cube);
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
    UserInterface.createButton("WinningCube", "sandbox.object = WinningCube");

    UserInterface.createButton("Portal", "sandbox.object = PortalCube");
    UserInterface.createDropdown({
      options: ["Blue", "Green", "Red", "Purple"],
      id: "portal-color",
      onChange: "Sandbox.updatePortalColor();",
    });
    UserInterface.createInput({
      placeholder: "Tp X",
      id: "tpX",
      onChange: 'Sandbox.updateTp("tpX");',
      type: "number",
    });
    UserInterface.createInput({
      placeholder: "Tp Y",
      id: "tpY",
      onChange: 'Sandbox.updateTp("tpY");',
      type: "number",
    });

    UserInterface.createButton(
      "Conveyor Belt",
      "sandbox.object = ConveyorBelt"
    );
    UserInterface.createDropdown({
      options: ["Right", "Left", "Up", "Down"],
      id: "belt-direction",
      onChange: "Sandbox.updateBeltDirection()",
    });

    UserInterface.createButton("Undo", "Sandbox.undo()");
  }
}
