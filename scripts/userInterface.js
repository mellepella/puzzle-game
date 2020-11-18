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
}
