document.onkeypress = function (event) {
  Game.detectKeyPress(event);
};

function debugListener() {
  canvas.addEventListener("mousemove", function (event) {
    UserInterface.getCursorPosition(event);
  });

  canvas.addEventListener("click", function (event) {
    Sandbox.addObject({
      type: sandboxObject, 
      x: Math.floor(mouseX/UNIT_SIZE), 
      y: Math.floor(mouseY/UNIT_SIZE)
    });
  });
}
