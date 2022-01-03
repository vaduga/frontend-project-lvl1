import { greet, ask } from './cli.js';
import { ROUNDS } from './const.js';

export default function gameLauncher(
  taskDescription = '',
  nextGame = () => null,
) {
  let round = 0;

  const userName = greet();
  console.log(taskDescription);

  while (round < ROUNDS) {
    const [question, correctAnswer] = nextGame();
    const userAnswer = ask(`Question: ${question} `);

    if (correctAnswer.toString() === userAnswer.toString()) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`
      ${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}!
              `);
      round = 0;
    }
  }

  console.log('You won 3 rounds in a row! Congrats');
}
