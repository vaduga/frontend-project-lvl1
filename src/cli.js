import readlineSync from 'readline-sync';

export default function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function ask(question = '') {
  return readlineSync.question(question);
}
