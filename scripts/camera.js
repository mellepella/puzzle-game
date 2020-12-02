class Camera {
  static async shake(aggression) {
    const canvas = document.getElementById("canvas");

    const delay = 7;
    const counter = [1, 2, 3, 4, 5];
    const distance = 0.12 * aggression;

    let percentage = 50;

    for (const number in counter) {
      percentage += distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(delay);
    }
    for (const number in counter) {
      percentage -= distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(delay);
    }
    for (const number in counter) {
      percentage -= distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(delay);
    }
    for (const number in counter) {
      percentage += distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(delay);
    }
  }
}
