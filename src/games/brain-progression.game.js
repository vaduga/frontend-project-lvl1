import launch from '../launcher.js';
import { getRandomInt, getRandomProgression } from '../helpers.js';

export default function brainProgressionGame() {
  const taskDescription = 'Missing number in this progression?';

  const nextGame = () => {
    let progression = getRandomProgression();
    let hide = getRandomInt(progression.length - 1, 0);
    let answer = progression[hide];
    progression[hide] = '..';
    return [progression, answer];
  };

  launch(taskDescription, nextGame);
}
