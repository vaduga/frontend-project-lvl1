export function isEven(number) {
  return number % 2 === 0;
}

export function isPrime(number) {}

export function getRandomInt(max) {}

export function calculate(left, right) {
  const operators = '+-*/';
  const operatorIndex = getRandomInt(3) - 1;
  const randOp = operators[operatorIndex];

  switch (randOp) {
    case '+':
      return [left + right, randOp];
    case '-':
      return [left - right, randOp];
    case '*':
      return [left * right, randOp];
    case '/':
      return [left / right, randOp];
    default:
      return [left + right, randOp];
  }
}

export function gcd(first, second) {}

export function getRandomProgression() {}
