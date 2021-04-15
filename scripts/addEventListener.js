document.onkeypress = function (event) {
  Game.detectKeyPress(event);
};

function debugListener() {
  canvas.addEventListener("mousemove", function (event) {
    UserInterface.setCursorPosition(event);
  });

  canvas.addEventListener("click", function (event) {
    Game.handleClick({ clickX: mouseX, clickY: mouseY, event });
  });
}
