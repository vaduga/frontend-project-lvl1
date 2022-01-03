import launch from '../launcher.js';
import { getRandomInt, isPrime } from '../helpers.js';
import { AnswerMap } from '../const.js';

export default function brainPrimeGame() {
  const taskDescription = 'Is number prime? yes/no ';

  const nextGame = () => {
    const randPrime = getRandomInt(24);
    const correctAnswer = isPrime(randPrime);
    return [randPrime, AnswerMap[correctAnswer]];
  };
  launch(taskDescription, nextGame);
}
