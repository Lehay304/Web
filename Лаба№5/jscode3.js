function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;

  // Проверка делителей от 2 до √number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

const input = prompt();
const number = parseInt(input);
const result = isPrime(number)
console.log(`${number} — ${result ? "простое" : "не простое"} число.`);