let mouseX = 0;
let mouseY = 0;

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
      eval(props.onchange);
    };
    document.body.appendChild(input);
  }
}
