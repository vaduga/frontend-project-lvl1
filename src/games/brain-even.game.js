import AnswerMap from '../const';
import gameLauncher from '../launcher.js';
import { getRandomInt, isEven } from '../helpers.js';

export default function brainEvenGame() {
  const taskDescription = 'Is number even? yes/no: ';

  const getNextNumber = () => {
    const randomNumber = getRandomInt(24);
    const correctAnswer = isEven(randomNumber);
    return [randomNumber, AnswerMap[correctAnswer]];
  };

  gameLauncher(taskDescription, getNextNumber);
}
