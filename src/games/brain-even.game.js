import greeting, { ask } from '../cli.js';

import { getRandomInt, isEven } from '../helpers.js';

const ROUNDS = 3;
const AnswerMap = {
  [true]: 'yes',
  [false]: 'no',
};

function launchGame(taskDescription = '', nextGame = () => null) {
  let round = 1;

  const userName = greeting();
  console.log(taskDescription);

  while (round <= ROUNDS) {
    round += 1;

    const [question, correctAnswer] = nextGame();
    const userAnswer = ask(`Question: ${question} `);

    if (correctAnswer.toString() === userAnswer.toString()) {
      console.log('Correct!');
      return;
    }

    console.log(`
    ${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, ${userName}!
            `);
  }

  console.log('Game over. Out of lifes!');
}

export default function brainEvenGame() {
  const taskDescription = 'Is secret number even? yes/no: ';

  const getNextNumber = () => {
    const randomNumber = getRandomInt(24);
    const correctAnswer = isEven(randomNumber);
    return [randomNumber, AnswerMap[correctAnswer]];
  };

  launchGame(taskDescription, getNextNumber);
}
