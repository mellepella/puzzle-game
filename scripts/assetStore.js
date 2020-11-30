const TEXTURE_SOURCES = {
  player: "../assets/images/player.png",
  winningCube: "../assets/images/winningCube.png",
  portalBlue: "../assets/images/portalBlue.png",
  portalPurple: "../assets/images/portalPurple.png",
  portalGreen: "../assets/images/portalGreen.png",
  portalRed: "../assets/images/portalRed.png",
  obstacle: "../assets/images/obstacle.png",
};

let textures = {
  player: "",
  winningCube: "",
  portalBlue: "",
  portalPurple: "",
  portalGreen: "",
  portalRed: "",
  obstacle: "",
};

class AssetStore {
  static async loadTextures() {
    for (let texture in textures) {
      await this.loadTexture(texture);
    }
  }

  static async loadTexture(texture) {
    textures[texture] = new Image();

    if (textures[texture].complete) {
      textures[texture].src = TEXTURE_SOURCES[texture];
      return new Promise((resolve) => {
        resolve("resolved");
      });
    } else {
      texture.onload = function () {
        textures[texture].src = TEXTURE_SOURCES[texture];
        return new Promise((resolve) => {
          resolve("resolved");
        });
      };
    }
  }
}
