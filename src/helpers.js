export function isEven(number) {
  return number % 2 === 0;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

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

export function gcd(first, second) {
  if (second > first) return gcd(second, first);
  if (!second) return first;
  return gcd(second, first % second);
}
