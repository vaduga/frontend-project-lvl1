import { greet, ask } from './cli.js';
import { ROUNDS } from './const.js';

export default function gameLauncher(
  taskDescription = '',
  nextGame = () => null,
) {
  let round = 1;

  const userName = greet();
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
