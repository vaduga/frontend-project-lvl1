import launch from '../launcher.js';
import { getRandomInt, getRandomProgression } from '../helpers.js';

export default function brainProgressionGame() {
  const taskDescription = 'Missing number in this progression?';

  const nextGame = () => {
    const progression = getRandomProgression();
    const hide = getRandomInt(progression.length - 1, 0);
    const answer = progression[hide];
    progression[hide] = '..';
    return [progression, answer];
  };

  launch(taskDescription, nextGame);
}
