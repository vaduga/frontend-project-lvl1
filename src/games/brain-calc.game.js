import launchGame from '../launcher.js';
import { getRandomInt, calculate } from '../helpers.js';

export default function brainCalcGame() {
  const taskDescription = 'Result of expression?';

  const nextGame = () => {
    const left = getRandomInt(50);
    const right = getRandomInt(50);
    const [res, oper] = calculate(left, right);
    const question = `${left} ${oper} ${right}`;
    return [question, res];
  };

  launchGame(taskDescription, nextGame);
}
