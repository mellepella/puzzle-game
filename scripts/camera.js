class Camera {
  static async shake(sleepDelay) {
    const canvas = document.getElementById("canvas");

    const aggression = 1.5;
    const sleepDuration = sleepDelay;
    const distance = 0.12 * aggression;
    const numberOfFrames = 4;

    let percentage = 50;

    for (let i = 0; i < numberOfFrames; i++) {
      percentage += distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(sleepDuration);
    }
    for (let i = 0; i < numberOfFrames; i++) {
      percentage -= distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(sleepDuration);
    }
    for (let i = 0; i < numberOfFrames; i++) {
      percentage -= distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(sleepDuration);
    }
    for (let i = 0; i < numberOfFrames; i++) {
      percentage += distance;
      canvas.style.marginLeft = `${percentage}%`;
      await sleep(sleepDuration);
    }
  }
}
