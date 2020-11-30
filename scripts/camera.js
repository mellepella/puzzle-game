function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Camera {
  static async shake() {
    const canvas = document.getElementById("canvas");
    const counter = [1, 2, 3];
    let percentage = 50;

    for (const number in counter) {
      percentage++;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(10);
    }
    for (const number in counter) {
      percentage--;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(10);
    }
    for (const number in counter) {
      percentage--;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(10);
    }
    for (const number in counter) {
      percentage++;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(10);
    }
  }
}
