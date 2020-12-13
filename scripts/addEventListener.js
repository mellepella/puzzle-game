document.onkeypress = function (event) {
  Game.detectKeyPress(event);
};

function debugListener() {
  canvas.addEventListener("mousemove", function (event) {
    UserInterface.getCursorPosition(event);
  });

  canvas.addEventListener("click", function (event) {
    Sandbox.addObject(
      sandboxObject,
      Math.floor(mouseX / UNIT_SIZE),
      Math.floor(mouseY / UNIT_SIZE)
    );
  });
}
