import { greet, ask } from './cli.js';
import { ROUNDS } from './const.js';

export default function gameLauncher(
  taskDescription = '',
  nextGame = () => null,
) {
  const userName = greet();
  console.log(taskDescription);

  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, correctAnswer] = nextGame();
    const userAnswer = ask(`Question: ${question} `);

    if (correctAnswer.toString() === userAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`
      ${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}!
              `);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
