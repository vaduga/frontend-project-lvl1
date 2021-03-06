import launch from '../launcher.js';
import { gcd, getRandomInt } from '../helpers.js';

export default function brainGCDGame() {
  const taskDescription = 'Greatest common divisor?';

  const nextGame = () => {
    const first = getRandomInt(50);
    const second = getRandomInt(50);
    return [`${first} ${second}?`, gcd(first, second)];
  };

  launch(taskDescription, nextGame);
}
