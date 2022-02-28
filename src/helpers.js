export function isEven(number) {
  return number % 2 === 0;
}

export function isPrime(number) {
  let div = number - 1;
  while (div > 1) {
    if (number % div === 0) return false;
    div -= 1;
  }
  return number > 2;
}

export function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function calculate(left, right) {
  const operators = '+-*/';
  const operatorIndex = getRandomInt(4);
  const randOp = operators[operatorIndex];

  switch (randOp) {
    case '+':
      return [left + right, randOp];
    case '-':
      return [left - right, randOp];
    case '*':
      return [left * right, randOp];
    default:
      return [left + right, randOp];
  }
}



export function gcd(first, second) {
  let div = first;
  while (div > 0) {
    if (first % div === 0 && second % div === 0) return div;
    div -= 1;
  }
  return null;
}

export function getRandomProgression() {
  const step = getRandomInt(5, 2);
  const length = getRandomInt(10, 5);
  let start = getRandomInt(100, getRandomInt(50));
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(start);
    start += step;
    i += 1;
  }
  return progression;
}
