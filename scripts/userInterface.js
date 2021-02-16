let mouseX = -50;
let mouseY = -50;
const KEYS = {
  up: "w",
  left: "a",
  down: "s",
  right: "d",
  restart: "r",
};

class UserInterface {
  static displayText(assets) {
    ctx.font = `${assets.size} ${FONT}`;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;

    ctx.strokeText(assets.content, assets.x * UNIT_SIZE, assets.y * UNIT_SIZE);

    ctx.fillStyle = "white";
    ctx.fillText(assets.content, assets.x * UNIT_SIZE, assets.y * UNIT_SIZE);
    ctx.fillStyle = "#f5f5f5";
  }

  static playMusic(musicId) {
    const music = document.getElementById(musicId);
    music.play();
  }

  static setCursorPosition(event) {
    const cRect = canvas.getBoundingClientRect();
    const canvasX = Math.round(event.clientX - cRect.left);
    const canvasY = Math.round(event.clientY - cRect.top);

    mouseX = canvasX;
    mouseY = canvasY;
  }

  static createButton(content, onClick, id) {
    const btn = document.createElement("BUTTON");
    btn.innerHTML = content;

    btn.onclick = function () {
      eval(onClick);
    };

    document.body.appendChild(btn);
  }

  static createInput(props) {
    const input = document.createElement("INPUT");
    input.setAttribute("type", props.type);
    input.placeholder = props.placeholder;
    input.id = props.id;
    input.value = props.content;

    input.onchange = function () {
      eval(props.onChange);
    };
    document.body.appendChild(input);
  }

  static createDropdown(props) {
    const selectTag = document.createElement("SELECT");
    selectTag.id = props.id || "select";
    selectTag.onchange = function () {
      eval(props.onChange);
    };

    for (const index in props.options) {
      const op = new Option();
      op.value = index;
      op.text = props.options[index];
      selectTag.options.add(op);
    }
    document.body.appendChild(selectTag);
  }
}
