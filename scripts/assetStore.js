const TEXTURES = {
  background: {
    texture: undefined,
    source: "../assets/images/background.png",
  },
  player: {
    texture: undefined,
    source: "../assets/images/player.png",
  },
  winningCube: {
    texture: undefined,
    source: "../assets/images/winningCube.png",
  },
  portalBlue: {
    texture: undefined,
    source: "../assets/images/portalBlue.png",
  },
  portalPurple: {
    texture: undefined,
    source: "../assets/images/portalPurple.png",
  },
  portalGreen: {
    texture: undefined,
    source: "../assets/images/portalGreen.png",
  },
  portalRed: {
    texture: undefined,
    source: "../assets/images/portalRed.png",
  },
  obstacle: {
    texture: undefined,
    source: "../assets/images/obstacle.png",
  },
};

class AssetStore {
  static getTexture(name) {
    return TEXTURES[name].texture;
  }

  static async loadTextures() {
    for (let name in TEXTURES) {
      await this.loadTexture(name);
    }
  }

  static async loadTexture(name) {
    TEXTURES[name].texture = new Image();

    if (TEXTURES[name].texture.complete) {
      TEXTURES[name].texture.src = TEXTURES[name].source;
      return new Promise((resolve) => {
        resolve("resolved");
      });
    } else {
      texture.onload = function () {
        TEXTURES[name].texture.src = TEXTURES[name].source;
        return new Promise((resolve) => {
          resolve("resolved");
        });
      };
    }
  }
}
